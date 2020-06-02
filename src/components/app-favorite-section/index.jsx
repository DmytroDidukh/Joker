import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import classNames from 'classnames'

import {Joke, Pagination} from "../index";
import {LOCAL_KEY, NO_JOKES_MESSAGES} from "../../configs/constants";
import * as dataActions from "../../actions";

import './index.scss';


const FavoriteSection = ({
                             favoritesJokes,
                             setFavoriteJoke,
                             removeFavoriteJoke,
                             removeAllFavoritesJokes,
                             isFavoritesVisible
                         }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const favJokesLength = favoritesJokes.length;
    const paginationLength = Math.ceil(favJokesLength / 10);
    const paginationButtonsCount = Array(paginationLength).fill(1).map((val, i) => val + i);
    const arrayIndexForCurrentPageItems = currentPage * 10;


    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem(LOCAL_KEY));
        favorites && setFavoriteJoke(favorites);
    }, []);


    const onRemoveOneJoke = (id) => {
        window.confirm('Not funny anymore?') && removeFavoriteJoke(id);
    };

    const onRemoveAllJokes = (id) => {
        window.confirm('Remove all jokes from \'Favorites\'?') && removeAllFavoritesJokes(id);
    };

    const slicer = () => {
        const slicedJokes = favoritesJokes.slice(arrayIndexForCurrentPageItems, arrayIndexForCurrentPageItems + 10)

        if (!slicedJokes.length) {
            setCurrentPage(currentPage - 1)
        }

        return slicedJokes;
    }

    return (
        <aside className={classNames('App__favorites', {'active-bar': !isFavoritesVisible})}>
            {
                isFavoritesVisible && <h5 className='title'>Favorites
                    {!!favJokesLength && <span> ({favJokesLength})</span>}
                </h5>
            }
            <span className='clear' onClick={onRemoveAllJokes}>remove all</span>
            <div className='favorite-section'>
                {
                    favJokesLength ? (
                        <div>
                            {slicer().map(joke => (
                                <Joke
                                    key={joke.id}
                                    joke={joke}
                                    favoritesJokes={favoritesJokes}
                                    removeFavoriteJoke={onRemoveOneJoke}
                                    favorite
                                />
                            ))}
                            {
                                favJokesLength > 10 && <Pagination
                                    paginationButtonsCount={paginationButtonsCount}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}/>
                            }
                        </div>
                    ) : (
                        <div className='jokes-section__no-jokes mt-5'>
                            {NO_JOKES_MESSAGES.noFavourites}
                            <span role='img' aria-label="black-heart">&#128420;</span>
                        </div>
                    )
                }
            </div>
        </aside>
    )
}

const mapStateToProps = ({favoritesJokes, isFavoritesVisible}) => ({favoritesJokes, isFavoritesVisible})
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteSection);

