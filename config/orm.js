const connection = require('./connection.js');

const orm = {
    selectAll: function(tableName, cb) {
        connection.query('SELECT * FROM ??;', [tableName], function(err, data){
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function (cb) {

    },

    updateOne: function(cb) {

    }
}

module.exports = orm;