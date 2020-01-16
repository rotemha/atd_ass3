const {List, Map} = require('immutable');

export default {
    gallery: Map({
        images: List(),
        openLightBox: false,
        activeImage: 0,
        activeFilter: List(),
        galleryWidth: 0
    }),
    app: Map({
        size: 200,
        user: 'Search user',
        users: List(),
        restaurant: 'Search restaurant',
        restaurants: List()
    })
};
