import React, {useEffect} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as dataActions from "../../actions";
import {Joke} from "../index";
import {API, LINKS} from '../../configs/constants';

import './index.scss';

const Body = ({setCategories, jokes, isJokesFound}) => {

    useEffect(() => {
        const data = fetch(API + LINKS.getCategories)

        data
            .then(data => data.json())
            .then(categories => setCategories(categories))
            .catch(e => window.alert(`Error! Status: ${e.status}`))

    }, [])

    const isSomethingFound = () => {
        return isJokesFound ? (
            <div className='jokes-section__no-jokes'>
                Nothing found. Try other search options
                <span> &#128580;</span>
            </div>
        ) : (
            <div className='jokes-section__no-jokes'>
                No jokes yet. Choose one up there
                <span> &#128070;</span>
            </div>
        )
    }


    return (
        <section className='jokes-section bg-border'>
            {
                !!jokes.length ? (
                    jokes.map((joke) => (
                        <Joke key={joke.id} joke={joke}/>
                    ))
                ) : (
                    isSomethingFound()
                )
            }
        </section>
    )
};

const mapStateToProps = ({categories, jokes, isJokesFound}) => {
    return {
        categories,
        jokes,
        isJokesFound
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Body);
