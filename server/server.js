const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const corsMiddleware = require('./cors');
const app = express();

require('dotenv').config();
let port = process.env.PORT || 3000;  

app.use(corsMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});