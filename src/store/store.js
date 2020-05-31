import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const composedEnhancers = compose(applyMiddleware(logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default () =>  createStore(rootReducer, undefined, composedEnhancers);

