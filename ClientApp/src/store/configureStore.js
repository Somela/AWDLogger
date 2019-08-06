import combineAllReducer from '../reducers/combineAllReducer'

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const store = createStore(
    combineAllReducer,
    applyMiddleware(thunk, logger)
);

export default store;