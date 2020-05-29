import React, {useEffect, useState} from "react";

import {RadioboxSettings} from "../index";
import {API, LINKS} from '../../configs/constants'


import './index.scss'

const Body = ({setCategories}) => {

    useEffect(() => {
        const data = fetch(API + LINKS.getCategories)

        data
            .then( data => data.json())
            .then(categories => setCategories(categories))
            .catch(e => window.alert(`Error! Status: ${e.status}`))

    }, [])


    return (
        <div>
            <RadioboxSettings/>
        </div>
    )
};

export default Body;
