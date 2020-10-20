const { fetchDailyV1 } = require('../../util/fetchDaily');

module.exports = async(req, res) => {
    res.json(await fetchDailyV1());
}