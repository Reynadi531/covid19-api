const express = require('express');
const cors  = require('cors');
const helemt = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

const { notFound, errorHandler, cacheControl } = require('./middlewares');

const app = express();
app.use(express.json())
app.use(cors());
app.use(helemt());
app.use(morgan('dev'));
app.use(compression());

app.get('/', (req, res) => {
    const url = `${req.protocol}://${req.hostname}${req.hostname == 'localhost' ? `:${PORT}` : ''}`;
    res.json({
        "messages": "Welcome to COVID-19 API | One stop solution for COVID-19 API",
        "endpoints": {
            "v1": [
                `${url}/api/v1`,
                `${url}/api/v1/yesterday`,
                `${url}/api/v1/daily`,
                `${url}/api/v1/countries/`,
                `${url}/api/v1/countries/{countryCode}`,
            ]
        }
    });
})

// v1
const v1_index = require('./api/v1/index');
app.use('/api/v1', v1_index);

app.use(notFound);
app.use(errorHandler);
app.use(cacheControl);

let PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`RUNNING AT PORT ${PORT}`));