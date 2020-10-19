const express = require('express');
const router = express.Router();
const axios = require('axios')
const yesterdayRoute = require('./yesterday');
const countriesRoute = require('./countries');
const countriesCodeRoute = require('./countriesCode');

router.get('/', async(req, res) => {
    const { data } = await axios.get('https://covid19.who.int/page-data/index/page-data.json');
    const rootData = data.result.pageContext.rawDataSets;
    res.json({
        "confirmed": rootData.today['Confirmed'],
        "cumulative_confirmed": rootData.today['Cumulative Confirmed'],
        "deaths": rootData.today['Deaths'],
        "cumulative_deaths": rootData.today['Cumulative Deaths'],
        "lastUpdate": rootData.lastUpdate
    });
});

router.get('/yesterday', yesterdayRoute)
router.get('/countries', countriesRoute)
router.get('/countries/:code', countriesCodeRoute)


module.exports = router;