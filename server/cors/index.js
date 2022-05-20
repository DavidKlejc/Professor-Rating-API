const cors = require('cors');

const corsOptions = {
    origin: 'https://banregister.unf.edu',  // Value returned to Access-Allow-Control-Origin header
    optionsSuccessStatus: 200
};

module.exports = cors(corsOptions);