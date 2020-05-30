import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import getJokes from '../../services/api';
import * as dataActions from "../../actions";
import {Categories, Button, SearchField, ErrorItem} from "../index";
import {RADIO_DATA, BUTTONS, ERROR_MESSAGES} from '../../configs/constants';


const RadioboxSettings = (
    {
        checkedRadio,
        selectedCategory,
        searchQuery,
        setCheckedRadio,
        setSelectedCategory,
        setSearchQuery,
        setJokes
    }) => {

        const [value, setValue] = useState('');
        const [errorMessageId, setErrorMessageId] = useState('');
        const [showErrorMessage, setShowErrorMessage] = useState(false);

        const [byRandom, byCategory, bySearch] = RADIO_DATA;
        const {getJokeButton} = BUTTONS;
        const [noAnyRadioChecked, searchQueryLength, noCategorySelected] = ERROR_MESSAGES;

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

        const checkValidation = () => {
            switch (checkedRadio) {
                case byRandom:
                    return true;
                case byCategory:
                    setErrorMessageId(byCategory)
                    return selectedCategory && true;
                case bySearch:
                    setErrorMessageId(bySearch)
                    const checkLength = searchQuery.trim().length >= 3 && searchQuery.trim().length <= 120;
                    return searchQuery && checkLength && true;
                default:
                    return false;
            }
        }


        const beforeOnGetJokes = async () => {
            if (!checkValidation()) {
                setShowErrorMessage(true);
                return;
            }

            setShowErrorMessage(false)
            const jokes = await getJokes(checkedRadio, selectedCategory, searchQuery);
            setJokes(jokes)
        }

        const onError = () => {
            const message = ERROR_MESSAGES.find(message => message.id === errorMessageId)
            return <ErrorItem message={message.message}/>
        }

        return (
            <FormControl component="fieldset" className='header__radio-section'>
                <RadioGroup value={value} onChange={handleChangeRadio}>
                    <FormControlLabel value={byRandom} control={<Radio color='default'/>} label={byRandom}/>
                    <FormControlLabel value={byCategory} control={<Radio color='default'/>} label={byCategory}/>
                    {
                        checkedRadio === byCategory && <Categories/>
                    }
                    {
                        showErrorMessage && !selectedCategory && errorMessageId === noCategorySelected.id && onError()
                    }
                    <FormControlLabel value={bySearch} control={<Radio color='default'/>} label={bySearch}/>
                    {
                        checkedRadio === bySearch && <SearchField onChangeValue={handlerChangeSearchInput}/>
                    }
                    {
                        showErrorMessage && errorMessageId === searchQueryLength.id && onError()
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
                    showErrorMessage && errorMessageId === noAnyRadioChecked.id && onError()
                }
            </FormControl>
        )
    }
;

const mapStateToProps = ({checkedRadio, selectedCategory, searchQuery}) => {
    return {
        checkedRadio,
        selectedCategory,
        searchQuery,
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(RadioboxSettings);
