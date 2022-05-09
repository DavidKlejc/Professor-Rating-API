const mysql = require('mysql');
const dbInfo = require('./dbconfig');


let connection;

let checkConnection = () => {
    if(process.env.CLEARDB_DATABASE_URL) {
        connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    } else {
        connection = mysql.createConnection(dbInfo);
    }
}

const getISQData = new Promise((resolve, reject) => {
    checkConnection();
    connection.connect();
    connection.query(`SELECT * FROM ISQ_DATA`, (err, result) => {
        connection.end();
        return err ? reject(err) : resolve(result);
    });
}); 

const getRating = (courseName, professorsLastName) => {
    return new Promise((resolve, reject) => {
        checkConnection();
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