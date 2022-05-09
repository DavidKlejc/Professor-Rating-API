const express = require('express');
const { getISQData, getRating } = require('../db');
const router = express.Router();

router.get('/ratings', (req, res) => {
    getISQData.then((result) => {
        res.json(result);
    });
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