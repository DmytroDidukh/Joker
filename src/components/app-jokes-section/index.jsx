import React, {useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import * as dataActions from "../../actions";
import {Joke, Pagination} from "../index";
import {NO_JOKES_MESSAGES} from '../../configs/constants';

import './index.scss';

const JokesSection = ({jokes, isJokesFound, favoritesJokes, setFavoriteJoke}) => {
    const [currentPage, setCurrentPage] = useState(0);

    const jokesLength = jokes.length;
    const paginationLength = Math.ceil(jokesLength / 10);
    const paginationButtonsCount = Array(paginationLength).fill(1).map((val, i) => val + i);
    const arrayIndexForCurrentPageItems = currentPage * 10;
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

    const slicer = () => {
        const slicedJokes = jokes.slice(arrayIndexForCurrentPageItems, arrayIndexForCurrentPageItems + 10)

        if (!slicedJokes.length) {
            setCurrentPage(currentPage - 1)
        }
        console.log(slicedJokes)
        return slicedJokes;
    }

    return (
        <section className='jokes-section bg-border'>
            {
                !!jokes.length ? (
                    <div>
                        {slicer().map((joke) => (
                            <Joke
                                key={joke.id}
                                joke={joke}
                                favoritesJokes={favoritesJokes}
                                setFavoriteJoke={onAddToFavorites}
                            />
                        ))
                    }
                        {
                            jokesLength > 10 && <Pagination
                                paginationButtonsCount={paginationButtonsCount}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}/>
                        }
                    </div>
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
