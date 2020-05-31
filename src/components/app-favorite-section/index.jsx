import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {Joke} from "../index";
import {NO_JOKES_MESSAGES} from "../../configs/constants";
import * as dataActions from "../../actions";


const FavoriteSection = ({favoritesJokes, setFavoriteJoke, removeFavoriteJoke}) => {

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        favorites && setFavoriteJoke(favorites)
    }, [])

    const onRemove = (id) => {
        window.confirm('Not funny anymore?') && removeFavoriteJoke(id);
    }

    return (
        <aside className='App__favorites'>
            <h5 className='title'>Favorites</h5>
            <div className='favorite-section'>
                {
                    favoritesJokes.length ? (
                        favoritesJokes.map(joke => (
                            <Joke
                                key={joke.id}
                                joke={joke}
                                favoritesJokes={favoritesJokes}
                                removeFavoriteJoke={onRemove}
                                favorite
                            />
                        ))
                    ) : (
                        <div className='jokes-section__no-jokes mt-5'>
                            {NO_JOKES_MESSAGES.noFavourites}
                            <span>&#128420;</span>
                        </div>
                    )
                }
            </div>
        </aside>
    )
}

const mapStateToProps = ({favoritesJokes}) => {
    return {
        favoritesJokes
    }
};
const mapDispatchToProps = (dispatch) => ({...bindActionCreators(dataActions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteSection);

