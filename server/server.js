const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const corsOptions = {
    origin: 'https://banregister.unf.edu',  // Value returned to Access-Allow-Control-Origin header
    optionsSuccessStatus: 200
};

require('dotenv').config();
let port = process.env.PORT || 3000;  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});

module.exports = cors(corsOptions);