import React, {useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@material-ui/core";

import {Categories} from "../index";
import {RADIO_DATA} from '../../configs/constants'

import './index.scss'

const RadioboxSettings = () => {
    const [value, setValue] = useState('');
    const [checkedRadioValue, setCheckedRadioValue] = useState('');

    const [random, byCategory, serachQuery] = RADIO_DATA

    const handleChange = (e) => {
        setCheckedRadioValue(e.target.value)
        setValue(e.target.value);
    }

    return (
        <FormControl component="fieldset">
            <RadioGroup value={value} onChange={handleChange}>
                <FormControlLabel value={random} control={<Radio/>} label={random}/>
                <FormControlLabel value={byCategory} control={<Radio/>} label={byCategory}/>
                {
                    checkedRadioValue === byCategory && <Categories/>
                }
                <FormControlLabel value={serachQuery} control={<Radio/>} label={serachQuery}/>

                {
                    checkedRadioValue === serachQuery &&
                    <TextField
                        id="outlined-full-width"
                        style={{ margin: 8 }}
                        placeholder="Search"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                }
            </RadioGroup>
        </FormControl>
    )
};


export default RadioboxSettings;
