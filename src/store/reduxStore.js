import { createStore } from 'redux';
import { combineReducers } from 'redux';
import sectionsReducer from '../reducers/sectionsReducer';
import filtersReducer from '../reducers/filtersReducer';

const reduxStore = () => (
    createStore( combineReducers( {
        sectionsReducer,
        filtersReducer
    } ) ) );

export default reduxStore;