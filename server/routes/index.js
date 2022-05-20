const express = require('express');
// const cors = require('../cors');
const { getISQData, getRating } = require('../db');
const router = express.Router();
const cors = require('cors');

const corsOptions = {
    origin: 'https://banregister.unf.edu',  // Value returned to Access-Allow-Control-Origin header
    optionsSuccessStatus: 200
};

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