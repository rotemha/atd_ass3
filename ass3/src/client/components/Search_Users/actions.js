import { Search_UsersActionsConstants} from './constants.js';


function updateSearchTypeAction(search_type) {
  return {
    type: Search_UsersActionsConstants.UPDATE_SEARCH_TYPE_USER,
    payload: {
        search_type
    }
  }
}

function updateTagAction(username){
  return {
      type: Search_UsersActionsConstants.UPDATE_TAG_USER,
      payload: {
        username
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


// function searchRestaurantAction(keyword){
//     return {
//         type: AppActionsConstants.SEARCH_RESTAURANT,
//         uri: '/api/load/restaurants',
//         payload: keyword
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

let Search_UsersActions  = {
    updateSearchTypeAction,
    updateTagAction
    // loadTagsSuccessAction,
    // loadTagsFailureAction,
    // searchRestaurantAction,
    // loadRestaurantsSuccessAction,
    // loadRestaurantsFailureAction
};

export default Search_UsersActions
