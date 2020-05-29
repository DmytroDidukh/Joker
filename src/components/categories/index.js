import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {Button} from '../index'
import {BUTTONS} from '../../configs/constants'
import * as dataActions from "../../actions";


const Categories = ({categories, selectedCategory, setSelectedCategory}) => {
    const {categoryButton} = BUTTONS;

    const selectButton = (e) => {
        const target = e.target.closest('button');
        if (target) {
            const buttonValue = target.children[0].childNodes[0].data;
            setSelectedCategory(buttonValue);
        }
    }

    return (
        <div className='categories' onClick={selectButton}>
            {
                categories.map((categoryName, i) => (
                    <Button
                        key={i}
                        size={categoryButton.size}
                        variant={categoryButton.variant}
                        className={categoryButton.class}
                        value={categoryName}
                        selectedButtonValue={selectedCategory}
                    />
                ))
            }
        </div>
    )
};


const mapStateToProps = ({categories, selectedCategory}) => {
    return {
        categories,
        selectedCategory
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
