import React, {useEffect, useState} from "react";
import classNames from 'classnames'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LaunchIcon from '@material-ui/icons/Launch';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import {Button} from "../index";
import {BUTTONS} from "../../configs/constants";

import './index.scss'

const Joke = ({
                  joke,
                  favorite,
                  favoritesJokes,
                  setFavoriteJoke = () => {},
                  removeFavoriteJoke = () => {}
}) => {
    const [newJoke, setNewJoke] = useState(joke)
    const {jokeButton} = BUTTONS;
    const {updated_at, icon_url, url, value, categories, liked} = newJoke;
    const link = url.split('/').pop()

    useEffect(() => {
        const likedJoke = favoritesJokes.find( likedJoke => likedJoke.id === newJoke.id);
        likedJoke && setNewJoke({...newJoke, liked: true});
    }, [joke, favoritesJokes])

    const getTime = () => {
        const date = new Date(updated_at.split(' ')[0]);
        const newDate = new Date();

        return Math.round((newDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    }

    const daysAgo = getTime();

    const likeIcon = () => {
        return (
            <FavoriteIcon
                className={classNames('joke-item__like-icon', {'liked': liked})}
                icon='Favorite'
                onClick={(e) => setFavoriteJoke(e, newJoke)}/>
        )
    }

    const trashIcon = () => {
        return (
            <DeleteForeverIcon
                className={'joke-item__trash-icon'}
                icon='DeleteForeverIcon'
                onClick={() => removeFavoriteJoke(newJoke.id)}/>
        )
    }

    return (
        <div className='jokes-section__joke-item joke-item'>
            {likeIcon()}
            {favorite && trashIcon()}
            <img className='joke-item__image' src={icon_url} alt="Icon"/>
            <div className='joke-item__data'>
                <div className='joke-item__description'>
                    <span className='joke-description__link'>ID:
                        <a href={url} target='_blank' rel="noopener noreferrer">{link} </a>
                    <LaunchIcon className='joke-item__launch-icon'/>
                    </span>
                    <h6 className='joke-description__joke'>{value}</h6>
                </div>
                <div className='joke-item__joke-info'>
                    <span className='joke-info__date'>Last update {daysAgo} days ago</span>
                    {
                        !!categories.length &&
                        <Button
                            size={jokeButton.size}
                            variant={jokeButton.variant}
                            value={categories[0]}
                            selectedButtonValue={jokeButton}
                            disabled
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Joke;
