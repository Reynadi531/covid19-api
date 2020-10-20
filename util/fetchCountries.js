const axios = require('axios')
const alpha2code = require('./alpha2code.json')

const fetchCountryV1 = async(countriesCode) => {
    const { data } = await axios.get('https://covid19.who.int/page-data/index/page-data.json');
    const rootData = data.result.pageContext.rawDataSets;
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
        result = result ? {} : null
    }else{
        result = countriesData;
    }
    return result;
}

module.exports = {
    fetchCountryV1
}