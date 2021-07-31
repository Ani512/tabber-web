import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sectionsReducer from '../reducers/sectionsReducer';
import filtersReducer from '../reducers/filtersReducer';
import UserAuthDetailsReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = () => (
    createStore( combineReducers( {
        sections: sectionsReducer,
        filters: filtersReducer,
        auth: UserAuthDetailsReducer
    } ), composeEnhancers( applyMiddleware( thunk ) ) ) );

export default reduxStore;