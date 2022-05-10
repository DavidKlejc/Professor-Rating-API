const express = require('express');
const { getISQData, getRating } = require('../db');
const router = express.Router();

router.get('/ratings', (req, res, next) => {
    try {
        getISQData.then((result) => {
            res.json(result);
        });
    } catch(error) {
        throw error;
    }
});

router.get('/:course/:professorLastName', (req, res, next) => {
    try {
        getRating(req.params.course, req.params.professorLastName).then((result) => {
            res.json(result);
        });
    } catch(error) {
        throw error;
    }
});

module.exports = router;