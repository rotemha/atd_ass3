import {Search_RestsActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import Search_RestsActions from './actions'

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

function* getRestaurants(action){
    console.log('Search_RestsSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"name": action.payload})
            });

        const json = yield call([res, 'json']); //retrieve body of response
        console.log(json.Stringify());
        // yield put(Search_RestsActions.loadRestaurantsSuccessAction(json));
    } catch (e) {
        // yield put(Search_RestsActions.loadRestaurantsFailureAction(e.message));
    }
}

function* Search_RestsSaga() {
    //using takeEvery, you take the action away from reducer to saga
    // yield takeEvery(Search_RestsActionsConstants.UPDATE_SEARCH_TYPE, loadTags);
    yield takeEvery(Search_RestsActionsConstants.SEARCH_RESTAURANT, getRestaurants);
}

export default Search_RestsSaga;
