import { User_LoginActionsConstants} from './constants.js';


function loginAction(username, password) {
    return {
        type: User_LoginActionsConstants.LOGIN,
        uri: '/api/user_login/login',
        payload: {
            username: username,
            password: password
        }
    }
}

function registerAction(username, password){
    return {
        type: User_LoginActionsConstants.REGISTER,
        uri: '/api/user_login/register',
        payload: {
            username: username,
            password: password
        }
    }
}

function logoutAction(username, password){
    return {
        type: User_LoginActionsConstants.LOGOUT,
        uri: '/api/user_login/logout',
        payload: {
            username: username,
            password: password
        }
    }
}

function profileAction(){
    return {
        type: User_LoginActionsConstants.PROFILE
    }
}

function updateUsernameAction(username){
    return {
        type: User_LoginActionsConstants.UPDATE_USERNAME,
        payload: {
          username
        }
    }
  }

  function updatePasswordAction(password){
    return {
        type: User_LoginActionsConstants.UPDATE_PASSWORD,
        payload: {
          password
        }
    }
  }

  function successfulLoginAction(username, password) {
    return {
        type: User_LoginActionsConstants.SUCCESS_LOGIN,
        // uri: '/api/user_login/login',
        payload: {
            username: username,
            password: password
        }
    }
}

function successfulRegisterAction(username, password){
    return {
        type: User_LoginActionsConstants.SUCCESS_REGISTER,
        // uri: '/api/user_login/register',
        payload: {
            username: username,
            password: password
        }
    }
}

function successfulLogoutAction(username, password){
    return {
        type: User_LoginActionsConstants.SUCCESS_LOGOUT,
        // uri: '/api/user_login/logout',
        payload: {
            username: username,
            password: password
        }
    }
}

function failedLoginAction(username, password) {
    return {
        type: User_LoginActionsConstants.FAIL_LOGIN,
        // uri: '/api/user_login/login',
        payload: {
            username: username,
            password: password
        }
    }
}

function failedRegisterAction(username, password){
    return {
        type: User_LoginActionsConstants.FAIL_REGISTER,
        // uri: '/api/user_login/register',
        payload: {
            username: username,
            password: password
        }
    }
}

function failedLogoutAction(username, password){
    return {
        type: User_LoginActionsConstants.FAIL_LOGOUT,
        // uri: '/api/user_login/logout',
        payload: {
            username: username,
            password: password
        }
    }
}

let User_LoginActions  = {
    loginAction,
    registerAction,
    logoutAction,
    profileAction,
    updateUsernameAction,
    updatePasswordAction,
    successfulLoginAction,
    successfulRegisterAction,
    successfulLogoutAction,
    failedLoginAction,
    failedRegisterAction,
    failedLogoutAction
};

export default User_LoginActions
