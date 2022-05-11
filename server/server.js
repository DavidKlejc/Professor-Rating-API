const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
let port = process.env.PORT || 3000;  

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});