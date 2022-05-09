const mysql = require('mysql');
const dbInfo = require('./dbconfig');

const getISQData = new Promise((resolve, reject) => {
    const connection = mysql.createConnection(dbInfo);
    connection.connect();
    connection.query(`SELECT * FROM ISQ_DATA`, (err, result) => {
        connection.end();
        return err ? reject(err) : resolve(result);
    });
}); 

const getRating = (courseName, professorsLastName) => {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(dbInfo);
        connection.connect();
        connection.query(`SELECT Rating FROM ISQ_DATA WHERE Course = ? AND ProfessorName = ?`, [courseName, professorsLastName], (err, result) => {
            connection.end();
            return err ? reject(err) : resolve(result);
        });
    });
}

module.exports = {
    getISQData: getISQData,
    getRating
}