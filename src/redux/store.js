import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import rootDSaga from './root-saga'

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

const store =  createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootDSaga)

const persistor = persistStore(store);

export default {store, persistor};