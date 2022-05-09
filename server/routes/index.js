const express = require('express');
const { queryDB } = require('../db');
const router = express.Router();

router.get('/ratings', (req, res) => {
    queryDB.then((result) => {
        res.json(result);
    });
});

// TODO: Implement route for /course/professorLastName

module.exports = router;