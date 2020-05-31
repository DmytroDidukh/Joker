import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {Joke} from "../index";
import {NO_JOKES_MESSAGES} from "../../configs/constants";
import * as dataActions from "../../actions";


const FavoriteSection = ({favoritesJokes, setFavoriteJoke, removeFavoriteJoke, removeAllFavoritesJokes}) => {

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites && setFavoriteJoke(favorites)
    }, []);

    const onRemoveOneJoke = (id) => {
        window.confirm('Not funny anymore?') && removeFavoriteJoke(id);
    };

    const onRemoveAllJokes = (id) => {
        window.confirm('Remove all jokes from \'Favorites\'?') && removeAllFavoritesJokes(id);
    };

    return (
        <aside className='App__favorites'>
            <h5 className='title'>Favorites</h5>
            <span className='clear' onClick={onRemoveAllJokes}>remove all</span>
            <div className='favorite-section'>
                {
                    favoritesJokes.length ? (
                        favoritesJokes.map(joke => (
                            <Joke
                                key={joke.id}
                                joke={joke}
                                favoritesJokes={favoritesJokes}
                                removeFavoriteJoke={onRemoveOneJoke}
                                favorite
                            />
                        ))
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

const mapStateToProps = ({favoritesJokes}) => ({favoritesJokes})
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteSection);

