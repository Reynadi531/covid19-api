const axios = require('axios');

const v1fetcher = async() => {
    const { data } = await axios.get('https://covid19.who.int/page-data/index/page-data.json');
    const rootData = await data.result.pageContext.rawDataSets;
    return rootData;
}

module.exports = {
    v1fetcher
}