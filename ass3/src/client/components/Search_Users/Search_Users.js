import React from 'react';
import './Search_Users.scss';
import {connect} from 'react-redux';
import {Button} from 'primereact/button';
import {RadioButton} from 'primereact/radiobutton';
import {InputText} from "primereact/inputtext";
import Search_UsersActions from './actions';

class Search_Users extends React.Component {

    render() { 
           
        return (
            <div className="app-root">
                <RadioButton inputId="rb2" name="city" value={true} onChange={(e) => this.props.updateSearchTypeEventHandler(e)} checked={this.props.is_username} />
                            <label htmlFor="rb2" className="p-radiobutton-label">Username</label>
                <RadioButton inputId="rb2" name="city" value={false} onChange={(e) => this.props.updateSearchTypeEventHandler(e)} checked={!this.props.is_username} />
                            <label htmlFor="rb2" className="p-radiobutton-label">Location</label>
                <InputText value={this.props.restaurant} onChange={(e) => this.props.updateTagEventHandler(e.target.value)}/>
                        <Button label="Search users"
                                onClick={() => this.props.searchRestaurantEventHandler(this.props.restaurant)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        is_username: state['users'].get('is_username'),
        user: state['users'].get('user'),
        available_users: state['users'].get('available_users')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchTypeEventHandler: (e) => {
            dispatch(Search_UsersActions.updateSearchTypeAction(e.value));
        },
        updateTagEventHandler: (e) => {
            dispatch(Search_UsersActions.updateTagAction(e));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search_Users);
