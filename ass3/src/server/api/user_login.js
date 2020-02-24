const express = require('express');
const router = express.Router();

let User_Login_Model = require('../model/user_login');

let _handleError = function(err){
    if (err) return console.log(err);
};

router.post('/before_register', (req, res) => {
    console.log('checking users array (before register)');
    const username = req.body.username;
    User_Login_Model
        .findOne({username: username})
        .then(doc => {
            if (doc === null) {
                console.log(`username ${username} is used!`);
                res.json({"result": false});
            } else {
                console.log(`username ${username} is unused!`);
                res.json({"result": true});
            }
        })
        .catch(e => {
            console.log(e)
        })
});

router.post('/register', function(req, res) {
    console.log('updating users array (register)');
    const username = req.body.username;
    const password = req.body.password;
    User_Login_Model
    .findOne({username: username})
        .then(doc => {
            if (doc === null) {
                User_Login_Model.create(
                    {
                        username: username,
                        password: password,
                        logged_in: true
                    }
                )
                res.json({"result": true});
            } else {
                console.log(`username ${username} is used!`);
                res.json({"result": false});
            }
        })
        .catch(e => {
            console.log(e)
        })
});

router.post('/login', (req, res) => {
    console.log('updating users array (login)');
    const username = req.body.username;
    const password = req.body.password;
    User_Login_Model
        .findOne({username: username})
        .then(doc => {
            if (doc === null || doc.logged_in){
                res.json({"result": false});
            } else if (doc.password === password && !doc.logged_in){
                res.json({"result": true});
            }
        })
        .catch(e => {
            console.log(e)
        })
});

router.post('/logout', (req, res) => {
    console.log('updating users array (logout)');
    const username = req.body.username;
    const password = req.body.password;
    User_Login_Model
        .findOne({username: username})
        .then(doc => {
            if (doc === null || !doc.logged_in){
                res.json({"result": false});
            } else if (doc.password === password && doc.logged_in){
                console.log(doc._id)
                // User_Login_Model.update({}, doc, {$set: {"logged_in": false}});
                res.json({"result": true});
            }
        })
        .catch(e => {
            console.log(e)
        })
});

router.get('/', (req, res) => {
    res.json({
        "dummy": 1
    })
});

    // app.post('/api/load/restaurants', function(req, res) {
    //     console.log('/api/load/restaurants');
    //     AppModel
    //         .findOne(
    //             {
    //                 name: req.body.name
    //             }
    //         )
    //         .then(doc => {
    //             res.json(doc);
    //             res.end();
    //         })
    //         .catch(e =>{
    //             _handleError(e);
    //         });

    // });
// };

module.exports = router;