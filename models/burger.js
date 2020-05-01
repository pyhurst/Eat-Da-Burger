const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(vals, cb) {
        orm.insertOne("burgers", vals, function(res) {
            cb(res);
        });
    },

    update: function() {
        
    }
}

module.exports = burger;