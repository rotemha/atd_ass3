import React from 'react';
import {connect} from 'react-redux';
import GalleryActions from '../Gallery/actions';
import {Button} from 'primereact/button';
import {FileUpload} from 'primereact/fileupload';
import {Growl} from "primereact/growl";

import './Image.scss';

class Image extends React.Component {

    constructor() {
        super();
        this.onUpload = this.onUpload.bind(this);
    }

    calcImageSize() {
        const galleryWidth = this.props.galleryWidth;
        const targetSize = 200;
        const imagesPerRow = Math.round(galleryWidth / targetSize);
        return galleryWidth / imagesPerRow;
    }

    static urlFromDto(dto) {
        return `https://farm${dto.farm}.staticflickr.com/${dto.server}/${dto.id}_${dto.secret}.jpg`;
    }

    onUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    render() {
        let size = this.calcImageSize();
        return (
            <div
                className="image-root"
                style={{
                    backgroundImage: `url(${Image.urlFromDto(this.props.image)})`,
                    filter: this.props.activeFilter,
                    width: size + 'px',
                    height: size + 'px'
                }}
            >
                <div>
                    <Button
                        icon="pi pi-clone"
                        onClick={() => this.props.onClickCloneEventHandler(this.props.id)}/>
                    <Button
                        icon="pi pi-filter"
                        onClick={() => this.props.onClickApplyFilterEventHandler(this.props.id)}/>
                    {/*<FileUpload name="files[]" url="./upload.php" onUpload={this.onUpload}*/}
                    {/*            multiple={true} accept=".txt" maxFileSize={1000000}/>*/}
                    {/*<Growl ref={(el) => {*/}
                    {/*    this.growl = el;*/}
                    {/*}}/>*/}
                    <Button
                        icon="pi pi-th-large"
                        onClick={() => this.props.onClickOpenLightBoxEventHandler(this.props.id)}
                    />
                    <Button
                        icon="pi pi-trash"
                        onClick={() => this.props.onClickDeleteEventHandler(this.props.id)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        image: state['gallery'].getIn(['images', props.id]),
        id: props.id,
        size: state['app'].get('size'),
        activeFilter: state['gallery'].getIn(['activeFilter', props.id]),
        galleryWidth: state['gallery'].get('galleryWidth')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCloneEventHandler: (idx) => {
            dispatch(GalleryActions.cloneAction(idx))
        },
        onClickApplyFilterEventHandler: (idx) => {
            dispatch(GalleryActions.applyFilterAction(idx))
        },
        onClickDeleteEventHandler: (idx) => {
            dispatch(GalleryActions.deleteAction(idx))
        },
        onClickOpenLightBoxEventHandler: (idx) => {
            dispatch(GalleryActions.setActiveImage(idx))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Image);
