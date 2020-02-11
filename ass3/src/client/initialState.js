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
        render_rests: true,
        render_users: true,
        render_login: true,
        render_hot_search: true
    }),
    rests: Map({
        isBasic: true,
        restaurant: "",
        available_rests: List()
    }),
    users: Map({
        is_username: true,
        user: "",
        available_users: List()
    }),
    login: Map({
        render_login: true
    }),
    hot_search: List()
};
