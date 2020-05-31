import React, {useEffect, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import getJokes from '../../services/api';
import * as dataActions from "../../actions";
import {Categories, Button, SearchField, ErrorItem} from "../index";
import {RADIO_DATA, BUTTONS, ERROR_MESSAGES, WELCOME, API, LINKS} from '../../configs/constants';

import './index.scss'


const HeadSection = (
    {
        checkedRadio,
        selectedCategory,
        searchQuery,
        setCheckedRadio,
        setSelectedCategory,
        setSearchQuery,
        setJokes,
        setCategories,
        setFavoritesVisibility
    }) => {

        const [value, setValue] = useState('');
        const [errorMessageId, setErrorMessageId] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false);

        const [byRandom, byCategory, bySearch] = RADIO_DATA;
        const {getJokeButton} = BUTTONS;

        useEffect(() => {
            const data = fetch(API + LINKS.getCategories)

            data
                .then(data => data.json())
                .then(categories => setCategories(categories))
                .catch(e => window.alert(`Error! Status: ${e.status}`))

        }, [])

        const handleChangeRadio = (e) => {
            const targetValue = e.target.value;

            setValue(targetValue);
            setCheckedRadio(targetValue)
            setSelectedCategory('')
            setSearchQuery('');
            setShowErrorMessage(false);
            setErrorMessageId('')
        }

        const handlerChangeSearchInput = (e) => {
            setSearchQuery(e.target.value)
            setShowErrorMessage(false);
            setErrorMessageId('')
        }

        //helps to detect where error occured
        useEffect(() => {
            setErrorMessageId(checkedRadio)
        }, [showErrorMessage])

        const checkValidation = () => {
            switch (checkedRadio) {
                case byRandom:
                    return true;
                case byCategory:
                    return selectedCategory && true;
                case bySearch:
                    const checkLength = searchQuery.trim().length >= 3 && searchQuery.trim().length <= 120;
                    return searchQuery && checkLength && true;
                default:
                    return false;
            }
        }

        const onErrorOccured = () => {
            const message = ERROR_MESSAGES.find(message => message.id === errorMessageId)
            return <ErrorItem message={message.message}/>
        }

        const beforeOnGetJokes = async () => {
            if (!checkValidation()) {
                setShowErrorMessage(true);
                return;
            }

            setShowErrorMessage(false)
            const jokes = await getJokes(checkedRadio, selectedCategory, searchQuery)
            setJokes(jokes)
        }

        const gamburger = (
            <div className='gamburger-favorites'>
                <div className='gamburger'>
                    <input type="checkbox" onClick={setFavoritesVisibility}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <p>Favorites</p>
            </div>
        )

        return (
            <section className='head-section bg-border'>
                <h1>{WELCOME.hi}</h1>
                <h2>{WELCOME.replica}</h2>
                {gamburger}
                <FormControl component="fieldset" className='header__radio-section'>
                    <RadioGroup value={value} onChange={handleChangeRadio}>
                        <FormControlLabel value={byRandom} control={<Radio color='default'/>} label={byRandom}/>
                        <FormControlLabel value={byCategory} control={<Radio color='default'/>} label={byCategory}/>
                        {
                            checkedRadio === byCategory && <Categories/>
                        }
                        {
                            showErrorMessage && !selectedCategory && checkedRadio === byCategory && onErrorOccured()
                        }
                        <FormControlLabel value={bySearch} control={<Radio color='default'/>} label={bySearch}/>
                        {
                            checkedRadio === bySearch && <SearchField onChangeValue={handlerChangeSearchInput}/>
                        }
                        {
                            showErrorMessage && checkedRadio === bySearch && onErrorOccured()
                        }
                    </RadioGroup>
                    <Button
                        size={getJokeButton.size}
                        variant={getJokeButton.variant}
                        value={getJokeButton.value}
                        className={getJokeButton.class}
                        onGetJoke={beforeOnGetJokes}
                    />
                    {
                        showErrorMessage && !checkedRadio && onErrorOccured()
                    }
                </FormControl>
            </section>

        )
    }
;

const mapStateToProps = ({checkedRadio, selectedCategory, searchQuery, favoritesJokes}) => {
    return {
        checkedRadio,
        selectedCategory,
        searchQuery,
        favoritesJokes,
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(HeadSection);
