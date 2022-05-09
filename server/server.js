const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
let port = process.env.HOST_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});