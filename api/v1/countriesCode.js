const fetchCountries = require('../../util/fetchCountriesV1');

module.exports = async (req, res) => {
    if(!req.params.code) {
        res.json(await fetchCountries())
    }else {
        res.json(await fetchCountries(req.params.code))
    }
}