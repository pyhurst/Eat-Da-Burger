const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render('index', hbsObj);
    })
});

module.exports = router;