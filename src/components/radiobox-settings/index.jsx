import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

import getJokes from '../../services/api'
import * as dataActions from "../../actions";
import {Categories, Button, SearchField} from "../index";
import {RADIO_DATA, BUTTONS} from '../../configs/constants'


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

        const [byRandom, byCategory, bySearch] = RADIO_DATA;
        const {getJokeButton} = BUTTONS;

        const handleChangeRadio = (e) => {
            const targetValue = e.target.value;

            setValue(targetValue);
            setCheckedRadio(targetValue)
            setSelectedCategory('')
            setSearchQuery('')
        }

        const handlerChangeSearchInput = (e) => {
            setSearchQuery(e.target.value)
        }

        const checkValidation = () => {
            switch (checkedRadio) {
                case byRandom:
                    return true;
                case byCategory:
                    return selectedCategory && true;
                case bySearch:
                    const checkLength = searchQuery.length >= 3 && searchQuery.length <= 120;
                    return searchQuery && checkLength && true;
                default:
                    return false;
            }
        }


        const beforeOnGetJokes = async () => {
            if (!checkValidation()) {
                window.alert('Choose something please or change query search length')
                return;
            }

            const jokes = await getJokes(checkedRadio, selectedCategory, searchQuery);
            setJokes(jokes)
        }

        return (
            <FormControl component="fieldset" className='header__radio-section'>
                <RadioGroup value={value} onChange={handleChangeRadio}>
                    <FormControlLabel value={byRandom} control={<Radio color='default'/>} label={byRandom}/>
                    <FormControlLabel value={byCategory} control={<Radio color='default'/>} label={byCategory}/>
                    {
                        checkedRadio === byCategory && <Categories/>
                    }
                    <FormControlLabel value={bySearch} control={<Radio color='default'/>} label={bySearch}/>
                    {
                        checkedRadio === bySearch && <SearchField onChangeValue={handlerChangeSearchInput}/>

                    }
                </RadioGroup>
                <Button
                    size={getJokeButton.size}
                    variant={getJokeButton.variant}
                    value={getJokeButton.value}
                    className={getJokeButton.class}
                    onGetJoke={beforeOnGetJokes}
                />
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


