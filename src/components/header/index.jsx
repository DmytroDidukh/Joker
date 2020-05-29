import React from "react";

import {welcome} from "../../configs/constants";

import './index.scss'

const Header = () => {
    return (
        <header>
            <h1>{welcome.hi}</h1>
            <h2>{welcome.replica}</h2>
        </header>
    )
};

export default Header;
