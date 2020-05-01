const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObj = {
            burgers: data
        };
        // console.log(hbsObj);
        res.render('index', hbsObj);
    })
});

router.post("/api/burgers", function(req, res) {

    // console.log(req.body);

    burger.create(req.body, function(data) {
        // console.log(hbsObj);
        res.json({ id: data.insertId });
    });
});

module.exports = router;