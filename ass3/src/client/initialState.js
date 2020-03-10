const {List, Map} = require('immutable');

export default {
    app: Map({
        render_rests: true,
        render_users: true,
        render_login: true,
        render_hot_search: true
    }),
    rests: Map({
        isBasic: true,
        isName: true,
        restaurant: "",
        location: "",
        selectedRestaurant: {},
        available_rests: [{
            name:"BBB",
            location:"Beer Sheva",
            total_average: 3,
            average: [{
                bathroom_quality: 3,
                staff_kindness: 3,
                cleanliness: 3,
                drive_thru: 3,
                delivery_speed: 3,
                food_quality: 3}],
            reviews: [{
                username: "a",
                bathroom_quality: 3,
                staff_kindness: 3,
                cleanliness: 3,
                drive_thru: 3,
                delivery_speed: 3,
                food_quality: 3
            }]
        },
        {
            name: "Agadir",
            location: "Tel Aviv",
            total_average: 4,
            average: [{
                bathroom_quality: 4,
                staff_kindness: 4,
                cleanliness: 4,
                drive_thru: 4,
                delivery_speed: 4,
                food_quality: 4}],
            reviews: [{
                username: "a",
                bathroom_quality: 4,
                staff_kindness: 4,
                cleanliness: 4,
                drive_thru: 4,
                delivery_speed: 4,
                food_quality: 4
            }]
        },
        {
            name:"Fish & Bread",
            location:"Akko",
            total_average: 2,
            average: [{
                bathroom_quality: 1,
                staff_kindness: 3,
                cleanliness: 3,
                drive_thru: 0,
                delivery_speed: 0,
                food_quality: 5}],
            reviews: [{
                username: "a",
                bathroom_quality: 1,
                staff_kindness: 3,
                cleanliness: 3,
                drive_thru: 0,
                delivery_speed: 0,
                food_quality: 5
            }]
        }],
        filtered_rests: [],
        received_restaurant: {},
        no_results: false,
        render_results: false,
        globalFilter: "",
        arr_of_restaurant_names: [],
        render_add_review: false,
        default_review: [{
            bathroom_quality: undefined,
            staff_kindness: undefined,
            cleanliness: undefined,
            drive_thru: undefined,
            delivery_speed: undefined,
            food_quality: undefined
        }]
    }),
    users: Map({
        is_username: true,
        user: "",
        received_username: "",
        location: "",
        available_users: [],
        render_results: false,
        no_results: false,
        arr_of_usernames: [],
        user_reviews: [],
        globalFilter: ""
    }),
    login: Map({
        render_login: true,
        render_profile: false,
        username: "",
        password: "",
        location: "",
        new_username: "",
        new_password: "",
        new_location: "",
        new_availability: true,
        availability: true,
        logged_in: false,
        globalFilter: "",
        my_reviews: []
    }),
    hot_search: List()
};
