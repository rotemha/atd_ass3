import initialState from '../../initialState';
import {Search_UsersActionsConstants} from './constants.js';
import { List } from 'immutable';

const Search_Users_Reducer = (state = initialState.users, action) => {
    console.log('Search_UsersReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type){
        case Search_UsersActionsConstants.UPDATE_SEARCH_TYPE_USER:
            return state.set('is_username', action.payload.search_type);
        case Search_UsersActionsConstants.UPDATE_TAG_USER:
            return state.set('user', action.payload.username);
        default: //otherwise state is lost!
            return state;
    }
};

export default Search_Users_Reducer;
