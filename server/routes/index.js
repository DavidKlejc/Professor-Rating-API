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
    next();
});

router.get('/:course/:professorLastName', (req, res) => {
    try {
        getRating(req.params.course, req.params.professorLastName).then((result) => {
            res.json(result);
        });
    } catch(error) {
        throw error;
    }
});

module.exports = router;