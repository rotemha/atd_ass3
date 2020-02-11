import { Search_RestsActionsConstants} from './constants.js';


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



// function loadRestaurantsSuccessAction(restaurants){
//     return {
//         type: AppActionsConstants.SEARCH_RESTAURANT_SUCCESS,
//         payload: {
//             restaurants: restaurants
//         }
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
    searchRestaurantAction

    // loadTagsAction,
    // loadTagsSuccessAction,
    // loadTagsFailureAction,
    // searchRestaurantAction,
    // loadRestaurantsSuccessAction,
    // loadRestaurantsFailureAction
};

export default Search_RestsActions
