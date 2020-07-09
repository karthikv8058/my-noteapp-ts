
import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const addItems = (item:string) => action(ActionTypes.ADD_ITEM,item);


