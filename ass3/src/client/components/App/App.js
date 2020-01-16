import React from 'react';
import './App.scss';
import Gallery from '../Gallery';
import {connect} from 'react-redux';
import AppActions from './actions';
import GalleryActions from '../Gallery/actions';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {AutoComplete} from "primereact/autocomplete";
import {InputText} from "primereact/inputtext";
import {SplitButton} from "primereact/splitbutton";

class App extends React.Component {

    render() {
        console.log('tags=', this.props.tags);
        return (
            <div className="app-root">
                <SplitButton label="Profile"/>
                <h2>Zomato Clone</h2>
                <div className="app-header">
                    {/*<AutoComplete value={this.state.country} suggestions={this.props.restaurants} completeMethod={this.filterCountrySingle} field="name"*/}
                    {/*              size={30} placeholder="Restaurant name" minLength={1} onChange={(e) => this.setState({country: e.value})} />*/}
                    {/*<span style={{ marginLeft: '10px' }}>Country: {this.state.country ? this.state.country.name || this.state.country : 'none'}</span>*/}
                    <div className="app-searches-restaurants">
                        <InputText value={this.props.restaurant} onChange={this.props.updateTagEventHandler}/>
                        <Button label="Search restaurants"
                                onClick={() => this.props.searchRestaurantEventHandler(this.props.restaurant)}/>


                    </div>
                    <div className="app-searches-users">
                        <InputText value={this.props.restaurant} onChange={this.props.updateTagEventHandler}/>
                        <Button label="Search users"/>
                    </div>
                </div>
                {/*<Gallery/>*/}
                <Button label="Add new review"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state['app'].get('restaurant'),
        restaurants: state['app'].get('restaurants').toArray()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadTagsEventHandler: () => {
            dispatch(AppActions.loadTagsAction());
        },
        updateTagEventHandler: (e) => {
            dispatch(AppActions.updateTagAction(e.value));
        },
        loadImagesEventHandler: (tag) => {
            dispatch(GalleryActions.loadImagesAction(tag))
        },
        searchRestaurantEventHandler: (restaurant) => {
            dispatch(AppActions.searchRestaurantAction(restaurant));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
