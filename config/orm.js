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
        if(vals.devoured === "true"){
            vals.devoured = true;
        }
        connection.query('UPDATE ?? SET ? WHERE id = ?', [tableName, vals, condition], function(err, data){
            if (err) throw err;
            cb(data);
        });
    },

    selectDevoured: function(tableName, cb) {
        connection.query('SELECT * FROM ?? WHERE devoured = true;', [tableName], function(err, data){
            if (err) throw err;
            cb(data);
        });
    },

    clearDevoured: function(tableName, ids, cb) {
        connection.query('DELETE FROM ?? WHERE id IN (?)', [tableName, ids], function(err, data){
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;