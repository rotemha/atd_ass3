import initialState from '../../initialState';
import {User_LoginActionsConstants} from './constants.js';
import { List } from 'immutable';

const User_Login_Reducer = (state = initialState.login, action) => {
    console.log('User_LoginReducerState=', state);
    console.log('RECEIVED ACTION:', action);
    switch (action.type){
        case User_LoginActionsConstants.UPDATE_USERNAME:
            return state.set('username', action.payload.username);
        case User_LoginActionsConstants.UPDATE_PASSWORD:
            return state.set('password', action.payload.password);
        case User_LoginActionsConstants.SUCCESS_LOGIN:
            state = state.set('logged_in', true);
            return state.set('render_login', false);
        case User_LoginActionsConstants.SUCCESS_REGISTER:
            state = state.set('logged_in', true);
            return state.set('render_login', false);
        case User_LoginActionsConstants.SUCCESS_LOGOUT:
            state = state.set('logged_in', false);
            return state.set('render_login', true);
        case User_LoginActionsConstants.FAIL_LOGIN:
            state = state.set('logged_in', false);
            return state.set('render_login', true);
        case User_LoginActionsConstants.FAIL_REGISTER:
            state = state.set('logged_in', false);
            return state.set('render_login', true);
        case User_LoginActionsConstants.FAIL_LOGOUT:
            state = state.set('logged_in', true);
            return state.set('render_login', false);

        default: //otherwise state is lost!
            return state;
    }
};

export default User_Login_Reducer;
