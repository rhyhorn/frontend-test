import { combineReducers } from 'redux';
import app from './app';
import search from './search.js';

export default combineReducers({
    app,
    search
});