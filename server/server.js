const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});