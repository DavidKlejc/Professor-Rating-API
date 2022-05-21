const mysql = require('mysql');
const dbInfo = require('./dbconfig');


let connection;
let createPool = () => {
    if(process.env.CLEARDB_DATABASE_URL) {
        connection = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
    } else {
        connection = mysql.createPool(dbInfo);
    }
};

createPool();

const getISQData = new Promise((resolve, reject) => {
    
    connection.getConnection((err, connection) => {
        if(err) {
            connection.release();
            throw err;
        }
        connection.query(`SELECT * FROM ISQ_DATA`, (err, result) => {
            connection.release();
            return err ? reject(err) : resolve(result);
        });
    });
}); 

const getRating = (courseName, professorsLastName) => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connection) => {
            if(err) {
                connection.release();
                throw err;
            }
            connection.query(`SELECT Rating FROM ISQ_DATA WHERE Course = ? AND ProfessorName = ?`, [courseName, professorsLastName], (err, result) => {
                connection.release();
                return err ? reject(err) : resolve(result);
            });
        });
    });
}

module.exports = {
    getISQData: getISQData,
    getRating
}