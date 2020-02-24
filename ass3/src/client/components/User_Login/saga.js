import {User_LoginActionsConstants} from './constants'
import { call, put, takeEvery } from 'redux-saga/effects'
import User_LoginActions from './actions'

function* login_or_register_or_logout(action){
    const username = action.payload.username;
    const password = action.payload.password;
    console.log('User_LoginSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            });

        const json = yield call([res, 'json']); //retrieve body of response
        console.log(json)
        console.log(json.result)
        if (json.result === true){
            if (action.type === User_LoginActionsConstants.LOGIN)
                yield put(User_LoginActions.successfulLoginAction(username, password));
            if (action.type === User_LoginActionsConstants.REGISTER)
                yield put(User_LoginActions.successfulRegisterAction(username, password));
            if (action.type === User_LoginActionsConstants.LOGOUT)
                yield put(User_LoginActions.successfulLogoutAction(username, password));
        } else {
            if (action.type === User_LoginActionsConstants.LOGIN)
                yield put(User_LoginActions.failedLoginAction(username, password));
            if (action.type === User_LoginActionsConstants.REGISTER)
                yield put(User_LoginActions.failedRegisterAction(username, password));
            if (action.type === User_LoginActionsConstants.LOGOUT)
                yield put(User_LoginActions.failedLogoutAction(username, password));
        }
    } catch (e) {
        if (action.type === User_LoginActionsConstants.LOGIN)
            yield put(User_LoginActions.failedLoginAction(username, password));
        if (action.type === User_LoginActionsConstants.REGISTER)
            yield put(User_LoginActions.failedRegisterAction(username, password));
        if (action.type === User_LoginActionsConstants.LOGOUT)
            yield put(User_LoginActions.failedLogoutAction(username, password));
    }
}

function* getUsers(action){
    console.log('User_LoginSaga=', action);
    try {
        const res = yield call(fetch, action.uri,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

        const json = yield call([res, 'json']); //retrieve body of response
        // yield put(User_LoginActions.loadRestaurantsSuccessAction(json));
    } catch (e) {
        // yield put(User_LoginActions.loadRestaurantsFailureAction(e.message));
    }
}

function* User_LoginSaga() {
    //using takeEvery, you take the action away from reducer to saga
    yield takeEvery(User_LoginActionsConstants.LOGIN, login_or_register_or_logout);
    yield takeEvery(User_LoginActionsConstants.REGISTER, login_or_register_or_logout);
    yield takeEvery(User_LoginActionsConstants.LOGOUT, login_or_register_or_logout);
    // yield takeEvery(User_LoginActionsConstants.SEARCH_RESTAURANT, getRestaurants);
}

export default User_LoginSaga;
