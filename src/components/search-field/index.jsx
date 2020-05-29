import React from "react";
import {TextField} from "@material-ui/core";

import './index.scss';


const SearchField = ({onChangeValue}) => {
    return (
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
            onChange={onChangeValue}
        />
    )
};

export default SearchField;
