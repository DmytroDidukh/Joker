import React, {useState} from "react";
import classNames from 'classnames'
import {connect} from 'react-redux';
import {Button, } from "@material-ui/core";

import './index.scss'

const Categories = ({categories}) => {
    const [buttonValue, setButtonValue] = useState('')

    const selectButton = (e) => {
        const target = e.target.closest('button')
        const buttonValue = target.children[0].childNodes[0].data
        setButtonValue(buttonValue)
    }

    return (
                <div className='categories' onClick={selectButton}>
                    {
                        categories.map((categoryName, i) => (
                            <Button
                                key={i}
                                size='small'
                                variant='outlined'
                                className={classNames({'active': buttonValue === categoryName})}>
                                {categoryName}</Button>
                        ))
                    }
                </div>
    )
};


const mapStateToProps = ({data}) => (
    {
        categories: data.categories
    }
);


export default connect(mapStateToProps, null)(Categories);
