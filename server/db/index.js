const mysql = require('mysql');
const dbInfo = require('./dbconfig');

const queryDB = new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbInfo);
    connection.connect();
    connection.query(`SELECT * FROM ISQ_DATA`, (err, result) => {
        return err ? reject(err) : resolve(result);
    });
}); 

module.exports = {
    queryDB: queryDB
}