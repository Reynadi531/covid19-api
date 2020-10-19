const axios = require('axios')

module.exports = async(req, res) => {
    const { data } = await axios.get('https://covid19.who.int/page-data/index/page-data.json');
    const rootData = data.result.pageContext.rawDataSets;
    res.json({
        "confirmed": rootData.yesterday['Confirmed'],
        "cumulative_confirmed": rootData.yesterday['Cumulative Confirmed'],
        "deaths": rootData.yesterday['Deaths'],
        "cumulative_deaths": rootData.yesterday['Cumulative Deaths']
    })
}