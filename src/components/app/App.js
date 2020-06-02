import React from 'react';
import {useSelector} from 'react-redux'

import {HeadSection, JokesSection, FavoriteSection} from '../index'

import './index.scss';

const App = () => {
    const isFavoritesVisible = useSelector( ({isFavoritesVisible}) => isFavoritesVisible)

    return (
        <div className="App d-flex">
            <div className='App__body'>
                <HeadSection/>
                <JokesSection/>
            </div>
            <FavoriteSection/>
            {!isFavoritesVisible && <div className='overlay'></div>}
        </div>
    );
}

export default App;
