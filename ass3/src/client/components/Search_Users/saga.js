import {Search_UsersActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import Search_UsersActions from './actions'

// function* loadTags(action){
//     console.log('AppSaga=', action);
//     try {
//         const res = yield call(fetch, action.uri,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//             });

//         const json = yield call([res, 'json']); //retrieve body of response
//         yield put(AppActions.loadTagsSuccessAction(json));
//     } catch (e) {
//         yield put(AppActions.loadTagsFailureAction(e.message));
//     }
// }

function* getUsers(action){
    console.log('Search_UsersSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        // yield put(Search_UsersActions.loadRestaurantsSuccessAction(json));
    } catch (e) {
        // yield put(Search_UsersActions.loadRestaurantsFailureAction(e.message));
    }
}

function* Search_UsersSaga() {
    //using takeEvery, you take the action away from reducer to saga
    // yield takeEvery(Search_UsersActionsConstants.LOAD_TAGS, loadTags);
    // yield takeEvery(Search_UsersActionsConstants.SEARCH_RESTAURANT, getRestaurants);
}

export default Search_UsersSaga;
