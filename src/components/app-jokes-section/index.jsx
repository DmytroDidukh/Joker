import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as dataActions from "../../actions";
import {Joke} from "../index";
import {NO_JOKES_MESSAGES} from '../../configs/constants';

import './index.scss';

const JokesSection = ({jokes, isJokesFound, favoritesJokes, setFavoriteJoke}) => {
    const {initiate, notFound} = NO_JOKES_MESSAGES;

    const onAddToFavorites = (e, joke) => {
        const isJokeAlreadyLiked = favoritesJokes.find( likedJoke => likedJoke.id === joke.id);
        !isJokeAlreadyLiked && setFavoriteJoke([joke])
    }

    const noJokesBodyPreview = () => {
        return isJokesFound ? (
            <div className='jokes-section__no-jokes'>
                {notFound}
                <span role='img' aria-label='face-with-rolling-eyes'>&#128580;</span>
            </div>
        ) : (
            <div className='jokes-section__no-jokes'>
                {initiate}
                <span role='img' aria-label='finger-up'>&#128070;</span>
            </div>
        )
    }

    return (
        <section className='jokes-section bg-border'>
            {
                !!jokes.length ? (
                    jokes.map((joke) => (
                        <Joke
                            key={joke.id}
                            joke={joke}
                            favoritesJokes={favoritesJokes}
                            setFavoriteJoke={onAddToFavorites}
                        />
                    ))
                ) : (
                    noJokesBodyPreview()
                )
            }
        </section>
    )
};

const mapStateToProps = ({categories, jokes, favoritesJokes, isJokesFound}) => {
    return {
        categories,
        jokes,
        favoritesJokes,
        isJokesFound
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(JokesSection);
