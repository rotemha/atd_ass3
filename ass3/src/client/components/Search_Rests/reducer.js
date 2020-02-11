import initialState from '../../initialState';
import {Search_RestsActionsConstants} from './constants.js';
import { List } from 'immutable';

const Search_Rests_Reducer = (state = initialState.rests, action) => {
    console.log('Search_RestsReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type){
        case Search_RestsActionsConstants.UPDATE_SEARCH_TYPE:
            return state.set('isBasic', action.payload.search_type);
        case Search_RestsActionsConstants.UPDATE_TAG_RESTATURANT:
            return state.set('restaurant', action.payload.restaurant_name);
            
        default: //otherwise state is lost!
            return state;
    }
};

export default Search_Rests_Reducer;
