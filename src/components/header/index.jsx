import React from "react";

import {RadioboxSettings} from "../index";
import {welcome} from "../../configs/constants";

import './index.scss'

const Header = () => {
    return (
        <header className='header bg-border'>
            <h1>{welcome.hi}</h1>
            <h2>{welcome.replica}</h2>
            <RadioboxSettings/>
        </header>
    )
};

export default Header;
