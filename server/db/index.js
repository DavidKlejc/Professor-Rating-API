const mysql = require('mysql');
const dbInfo = require('./dbconfig');


let connection;

let checkConnection = () => {
    if(process.env.CLEARDB_DATABASE_URL) {
        connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    } else {
        connection = mysql.createConnection(dbInfo);
    }
    connection.connect();
}

checkConnection();

const getISQData = new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ISQ_DATA`, (err, result) => {
        return err ? reject(err) : resolve(result);
    });
}); 

const getRating = (courseName, professorsLastName) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT Rating FROM ISQ_DATA WHERE Course = ? AND ProfessorName = ?`, [courseName, professorsLastName], (err, result) => {
            return err ? reject(err) : resolve(result);
        });
    });
}

connection.end();

module.exports = {
    getISQData: getISQData,
    getRating
}