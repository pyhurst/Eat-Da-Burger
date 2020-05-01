const connection = require('../config/connection.js');

const orm = {
    selectAll: function(tableName, cb) {
        connection.query('SELECT * FROM ??;', [tableName], function(err, data){
            if (err) throw err;
            cb(data);
        });
    },

    insertOne: function (tableName, vals, cb) {
        connection.query('INSERT INTO ?? SET ?', [tableName, vals], function(err, data){
            if (err) throw err;
            cb(data);
        });
    },

    updateOne: function(tableName, vals, condition, cb) {
        console.log(vals);
        if(vals.devoured === "true"){
            vals.devoured = true;
        }
        connection.query('UPDATE ?? SET ? WHERE id = ?', [tableName, vals, condition], function(err, data){
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;