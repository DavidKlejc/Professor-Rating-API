const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsProxy = require('cors-anywhere');
const app = express();
require('dotenv').config();
let port = process.env.PORT || 3000;  

corsProxy.createServer({
    originWhitelist: ['https://banregister.unf.edu/StudentRegistrationSsb/ssb/classSearch/classSearch', 'https://banregister.unf.edu/StudentRegistrationSsb/ssb/classSearch/classSearch/*'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});