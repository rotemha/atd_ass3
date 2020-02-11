import React from 'react';
import './User_Login.scss';
import {connect} from 'react-redux';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import User_LoginActions from './actions';

class User_Login extends React.Component {

    render() {
        return (
            <div className="app-root">
                {this.props.render_login && 
                    <div>
                        <Button label="Login"
                                onClick={() => this.props.loginEventHandler()}/>
                        <Button label="Register"
                                onClick={() => this.props.registerEventHandler()}/>
                    </div>
                }
                {(!this.props.render_login) && 
                    <div>
                        <Button label="Profile"
                                onClick={() => this.props.profileEventHandler()}/>
                        <Button label="Logout"
                                onClick={() => this.props.logoutEventHandler()}/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        render_login: state['login'].get('render_login')
        // restaurant: state['rests'].get('restaurant'),
        // available_rests: state['rests'].get('available_rests')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginEventHandler: () => {
            dispatch(User_LoginActions.loginAction());
        },
        registerEventHandler: () => {
            dispatch(User_LoginActions.registerAction());
        },
        logoutEventHandler: () => {
            dispatch(User_LoginActions.logoutAction());
        },
        profileEventHandler: () => {
            dispatch(User_LoginActions.profileAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User_Login);
