const { fetchCountryV1 } = require('../../util/fetchCountries');

module.exports = async (req, res) => {
    if(!req.params.code) {
        res.json(await fetchCountryV1())
    }else {
        res.json(await fetchCountryV1(req.params.code))
    }
}