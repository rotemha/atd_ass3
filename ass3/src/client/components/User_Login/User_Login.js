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
                <InputText value={this.props.username} onChange={(e) => this.props.updateUsernameEventHandler(e.target.value)}/>
                <InputText value={this.props.password} onChange={(e) => this.props.updatePasswordEventHandler(e.target.value)}/>
                {this.props.render_login && 
                    <div>
                        <Button label="Login"
                                onClick={() => this.props.loginEventHandler(this.props.username, this.props.password)}/>
                        <Button label="Register"
                                onClick={() => this.props.registerEventHandler(this.props.username, this.props.password)}/>
                    </div>
                }
                {(!this.props.render_login) && 
                    <div>
                        <Button label="Profile"
                                onClick={() => this.props.profileEventHandler()}/>
                        <Button label="Logout"
                                onClick={() => this.props.logoutEventHandler(this.props.username, this.props.password)}/>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        username: state['login'].get('username'),
        password: state['login'].get('password'),
        render_login: state['login'].get('render_login')
        // restaurant: state['rests'].get('restaurant'),
        // available_rests: state['rests'].get('available_rests')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateUsernameEventHandler: (e) => {
            dispatch(User_LoginActions.updateUsernameAction(e));
        },
        updatePasswordEventHandler: (e) => {
            dispatch(User_LoginActions.updatePasswordAction(e));
        },        
        loginEventHandler: (username, password) => {
            dispatch(User_LoginActions.loginAction(username, password));
        },
        registerEventHandler: (username, password) => {
            dispatch(User_LoginActions.registerAction(username, password));
        },
        logoutEventHandler: (username, password) => {
            dispatch(User_LoginActions.logoutAction(username, password));
        },
        profileEventHandler: () => {
            dispatch(User_LoginActions.profileAction());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User_Login);
