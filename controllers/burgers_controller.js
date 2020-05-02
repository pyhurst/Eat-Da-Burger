const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObj = {
            burgers: data
        };
        res.render('index', hbsObj);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.create(req.body, function(data) {
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.body, req.params.id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;