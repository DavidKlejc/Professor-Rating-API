const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send(req.body);
});

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});