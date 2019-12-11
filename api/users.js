const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

// signup
router.post('/', ((req, res) => {
    let newUser = new User(req.body.user);
    newUser.dt_created = new Date();
    newUser.setPassword(req.body.password);
    newUser.save((err, user) => {
        if(err) {
            res.sendStatus(500);
        } else {
            res.json({
                token: newUser.generateJWT(),
                user: user
            })
        }
    })
}))


// get user
router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id}, (err, user) => {
        if(err) res.sendStatus(500);
        res.json(user);
    })
})

// UPDATE USER 


module.exports = router;
