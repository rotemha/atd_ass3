import initialState from '../../initialState';
import {User_LoginActionsConstants} from './constants.js';
import { List } from 'immutable';

const User_Login_Reducer = (state = initialState.login, action) => {
    console.log('User_LoginReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    // switch (action.type){
    //     case AppActionsConstants.UPDATE_TAG:
    //         return state.set('restaurant', action.payload.restaurant);
    //     case AppActionsConstants.LOAD_TAGS_SUCCESS:
    //         let res = action.payload.tags.map(elm => {
    //             return {label: elm, value: elm }
    //         });
    //         return state.set('tags', new List(res));
    //     default: //otherwise state is lost!
            return state;
    // }
};

export default User_Login_Reducer;
