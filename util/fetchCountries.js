const alpha2code = require('./resource/alpha2code.json')
const { v1fetcher } = require('./mainFetcher')

const fetchCountryV1 = async(countriesCode) => {
    const rootData = await v1fetcher();
    const countriesData = rootData.byCountry.rows.map(data => {
        return {
            "country": alpha2code[data[0]],
            "country_code": data[0],
            "confirmed": data[6],
            "cumulative_confirmed": data[7],
            "deaths": data[1],
            "cumulative_deaths": data[2],
        }
    })
    let result = {};
    if(countriesCode) {
        countriesCode = countriesCode.toString().toUpperCase();
        countriesData.forEach(element => {
            if(element['country_code'] == countriesCode) {
                result = element
            }
        });
    }else{
        result = countriesData;
    }
    return result;
}

module.exports = {
    fetchCountryV1
}