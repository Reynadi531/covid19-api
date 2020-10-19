const fetchCountries = require('../../util/fetchCountriesV1');

module.exports = async(req, res) => {
    res.json(await fetchCountries())
}