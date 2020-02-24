import { Search_RestsActionsConstants} from './constants.js';
import {AppActionsConstants} from "../App/constants";


function updateSearchTypeAction(search_type) {
  return {
    type: Search_RestsActionsConstants.UPDATE_SEARCH_TYPE,
    payload: {
        search_type
    }
  }
}

function updateTagAction(restaurant_name){
    return {
        type: Search_RestsActionsConstants.UPDATE_TAG_RESTATURANT,
        payload: {
          restaurant_name
        }
    }
}

function searchRestaurantAction(keyword){
    return {
        type: Search_RestsActionsConstants.SEARCH_RESTAURANT,
        uri: '/api/load/restaurants',
        payload: keyword
    }
}

function loadRestaurantsSuccessAction(restaurants){
    return {
        type: Search_RestsActionsConstants.SEARCH_RESTAURANT_SUCCESS,
        payload: {
            restaurants: restaurants
        }
    }
}
// function loadTagsSuccessAction(tags){
//     return {
//         type: AppActionsConstants.LOAD_TAGS_SUCCESS,
//         payload: {
//             tags: tags
//         }
//     }
// }

// function loadTagsFailureAction(error){
//     return {
//         type: AppActionsConstants.LOAD_TAGS_FAILURE,
//         error: error
//     }
// }




// function loadRestaurantsFailureAction(error){
//     return {
//         type: AppActionsConstants.SEARCH_RESTAURANT_FAILURE,
//         error: error
//     }
// }

let Search_RestsActions  = {
    updateSearchTypeAction,
    updateTagAction,
    searchRestaurantAction,
    loadRestaurantsSuccessAction

    // loadTagsAction,
    // loadTagsSuccessAction,
    // loadTagsFailureAction,
    // searchRestaurantAction,
    // loadRestaurantsSuccessAction,
    // loadRestaurantsFailureAction
};

export default Search_RestsActions
