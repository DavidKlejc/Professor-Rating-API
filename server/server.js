const express = require('express');
const apiRouter = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();
let port = process.env.PORT || 3000;  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
// app.use(
//     cors({
//         origin: "*",
//     })
// );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', apiRouter);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});