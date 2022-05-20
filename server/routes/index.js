const express = require('express');
const { getISQData, getRating } = require('../db');
const router = express.Router();
const cors = require('./cors');

router.get('/ratings', cors(corsOptions), (req, res) => {
    try {
        getISQData.then((result) => {
            res.json(result);
        });
    } catch(error) {
        throw error;
    }
});

router.get('/:course/:professorLastName', cors(corsOptions), (req, res) => {
    try {
        getRating(req.params.course, req.params.professorLastName).then((result) => {
            res.json(result);
        });
    } catch(error) {
        throw error;
    }
});

module.exports = router;