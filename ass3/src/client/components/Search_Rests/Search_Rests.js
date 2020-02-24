import React from 'react';
import './Search_Rests.scss';
import {connect} from 'react-redux';
import {Button} from 'primereact/button';
import {RadioButton} from 'primereact/radiobutton';
import {InputText} from "primereact/inputtext";
import Search_RestsActions from './actions';

// import { Button as btn} from 'antd';

class Search_Rests extends React.Component {

    render() {
        return (
            <div className="app-root">
                <div>
                <btn type="primary">Primary Search</btn>

                    <RadioButton inputId="rb2" name="city" value={true} onChange={(e) => this.props.updateSearchTypeEventHandler(e)} checked={this.props.isBasic} />
                                <label htmlFor="rb2" className="p-radiobutton-label">Basic Search</label>
                     <RadioButton inputId="rb2" name="city" value={false} onChange={(e) => this.props.updateSearchTypeEventHandler(e)} checked={!this.props.isBasic} />
                                <label htmlFor="rb2" className="p-radiobutton-label">Advanced Search</label>
                {/*{this.props.isBasic*/}
                {/*    && */}
                    <InputText value={this.props.restaurant} onChange={(e) => this.props.updateTagEventHandler(e.target.value)}/>
                    {/*&& */}
                    <Button label="Search restaurants"
                            onClick={() => this.props.searchRestaurantEventHandler(this.props.restaurant)}/>
                    {
                        !this.props.available_rests.isEmpty()&&
                            <div>
                                <h1>HHHHH</h1>
                            </div>
                    }
                {/*}*/}
                </div>
                <div>
                    {(!this.props.isBasic) && 
                        <InputText value={this.props.restaurant} onChange={(e) => this.props.updateTagEventHandler(e.target.value)}/>
                        &&
                        <Button label="Search restaurants"
                            onClick={() => this.props.searchRestaurantEventHandler(this.props.restaurant)}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isBasic: state['rests'].get('isBasic'),
        restaurant: state['rests'].get('restaurant'),
        available_rests: state['rests'].get('available_rests')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchTypeEventHandler: (e) => {
            dispatch(Search_RestsActions.updateSearchTypeAction(e.value));
        },
        updateTagEventHandler: (e) => {
            dispatch(Search_RestsActions.updateTagAction(e));
        },
        // loadImagesEventHandler: (tag) => {
        //     dispatch(GalleryActions.loadImagesAction(tag))
        // },
        searchRestaurantEventHandler: (restaurant) => {
            dispatch(Search_RestsActions.searchRestaurantAction(restaurant));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search_Rests);
