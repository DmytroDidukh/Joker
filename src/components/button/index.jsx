import React from "react";
import {Button as MaterialButton} from "@material-ui/core";
import classNames from "classnames";

import './index.scss'

const Button = (
    {
        onClick = () => {
        },
        size,
        variant,
        className,
        value,
        selectedButtonValue,
        color = 'default',
        disabled = false
    }) => {

    return (
        <MaterialButton
            onClick={onClick}
            size={size}
            variant={variant}
            color={color}
            disabled={disabled}
            className={classNames({[className]: selectedButtonValue === value || className === 'main'})}>
            {value}
        </MaterialButton>
    )
};

export default Button;
