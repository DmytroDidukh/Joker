import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';
import LaunchIcon from '@material-ui/icons/Launch';

import {Button} from "../index";
import {BUTTONS} from "../../configs/constants";

const Joke = ({joke}) => {
    const {jokeButton} = BUTTONS;
    const {updated_at, icon_url, url, value, categories} = joke;
    const link = url.split('/').pop()

    const toggleLike = (e) => {
        const target = e.target.closest('svg')
        target.classList.toggle('liked')
    }

    const getTime = () => {
        const date = new Date(updated_at.split(' ')[0]);
        const newDate = new Date();
        const daysAgo = Math.round((newDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

        return daysAgo;
    }

    const daysAgo = getTime();

    return (
        <div className='jokes-section__joke-item joke-item'>
            <FavoriteIcon className='joke-item__like-icon' icon='Favorite' onClick={toggleLike}/>
            <img className='joke-item__image' src={icon_url} alt="Icon"/>
            <div className='joke-item__data'>
                <div className='joke-item__description'>
                    <span className='joke-description__link'>ID:
                        <a href={url} target='_blank'>{link} </a>
                    <LaunchIcon className='joke-item__launch-icon'/>
                    </span>
                    <h4 className='joke-description__joke'>{value}</h4>
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
