const { fetchCountryV1 } = require('../../util/fetchCountries');

module.exports = async(req, res) => {
    res.json(await fetchCountryV1())
}