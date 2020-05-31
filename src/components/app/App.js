import React from 'react';

import {HeadSection, JokesSection, FavoriteSection} from '../index'

import './index.scss';

const App = () => {
    return (
        <div className="App d-flex">
            <div className='App__body'>
                <HeadSection/>
                <JokesSection/>
            </div>
            <FavoriteSection/>
        </div>
    );
}

export default App;
