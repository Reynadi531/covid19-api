const { fetchDailyV1 } = require('../../util/fetchDaily');

module.exports = async(req, res) => {
    if(req.params.date) {
        res.json(await fetchDailyV1(req.params.date))
    }else {
        res.json(await fetchDailyV1())
    }
}