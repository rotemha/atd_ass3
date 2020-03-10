import {Search_RestsActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import User_LoginActions from '../User_Login/actions'
import Search_RestsActions from './actions'

function* getRestaurant(action){
    console.log('Search_RestsSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "name": action.payload
                })
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if (json.result !== false){
            yield put(Search_RestsActions.loadRestaurantSuccessAction(json));
        } else {
            yield put(Search_RestsActions.loadRestaurantFailureAction());
        }
    } catch (_e) { }
}

function* getRestaurantLocation(action){
    console.log('Search_RestsSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "location": action.payload
                })
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if (json.result !== false){
            let arr = [];
            (json.result).forEach(element => {
                arr.push(element.name);
            });
            console.log(arr);
            yield put(Search_RestsActions.loadRestaurantLocationSuccessAction(arr));
        } else {
            yield put(Search_RestsActions.loadRestaurantLocationFailureAction());
        }
    } catch (_e) { }
}

function* addReview(action){
    console.log('Search_RestsSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": action.payload.username,
                    "restaurant_name": action.payload.restaurant_name,
                    "location": action.payload.location,
                    "rowData": action.payload.rowData
                })
            });

        const json = yield call([res, 'json']); //retrieve body of response
        if (json.result !== false){
            yield put(User_LoginActions.updateMyReviewsAction(json.result_my_reviews));
            yield put(Search_RestsAction.updateAverageAction(rowData.name, json.result_average_new));
            yield put(Search_RestsAction.updateTotalAverageAction(rowData.name, json.result_total_average_new));
            yield put(Search_RestsAction.updateReviewsAction(rowData.name, json.result_reviews_new));
        }
    } catch (_e) { }
}

function* Search_RestsSaga() {
    //using takeEvery, you take the action away from reducer to saga
    // yield takeEvery(Search_RestsActionsConstants.UPDATE_SEARCH_TYPE, loadTags);
    yield takeEvery(Search_RestsActionsConstants.SEARCH_RESTAURANT, getRestaurant);
    yield takeEvery(Search_RestsActionsConstants.SEARCH_RESTAURANT_LOCATION, getRestaurantLocation);
    yield takeEvery(Search_RestsActionsConstants.ADD_REVIEW, addReview);
}

export default Search_RestsSaga;
