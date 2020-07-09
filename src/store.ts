import {createStore} from 'redux';
import { combineReducers } from 'redux';

import itemReducer from './containers/Newitems/reducer';

const rootReducer = combineReducers({
  itemReducer
});


export const store = createStore(rootReducer);