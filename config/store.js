import {createStore} from 'redux';
import themeReducer from '../reducers/themeReducer.js';

const store = createStore(themeReducer);

export default store;
