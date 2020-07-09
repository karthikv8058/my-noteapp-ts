import ActionTypes from './constants';
import ContainerActions from './types';
 
export interface itemStates{
    items:string[]
}
const initialState ={
    items:[]
}
 
const itemReducer = (state:itemStates = initialState,action:ContainerActions) => {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            return{
                ...state,
                items:[...state.items,action.payload]
            }
            default:
                return state;
    }
}

export default itemReducer;
