import {createStore, combineReducers, applyMiddleware} from 'redux';
import {
    persistStore,
    persistReducer,
} from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/es/storage';
import promise from 'redux-promise-middleware';

//Import ALl Reducer
import AppReducer from './Reducer/AppReducer';

const AppReducerPersist = persistReducer({
    key: 'primary',
    storage,
}, AppReducer);

const RootReducer = combineReducers({
    AppReducerPersist,
});

const Middleware = applyMiddleware(
    promise,
    createLogger({ collapsed: true })
);

export const store = createStore(RootReducer, {}, Middleware);

export const persistor = persistStore(store);
