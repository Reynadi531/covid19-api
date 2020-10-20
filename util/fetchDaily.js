const { v1fetcher } = require('./mainFetcher');

const fetchDailyV1 = async(date) => {
    let result = {};
    const rootData = await v1fetcher()
    const dailyData = rootData.byDay.rows.map(data => {
        return {
            "day": data[0],
            "date": new Date(data[0]),
            "confirmed": data[6],
            "cumulative_confirmed": data[7],
            "deaths": data[1],
            "cumulative_deaths": data[2]
        }
    })
    if(date) {
        date = date.toString()
        if(date.length == 13) {
            dailyData.forEach(element => {
                if (element.day == date) {
                    result = element
                }
            });
        }else if(date.length <= 11) {
            dailyData.forEach(element => {
                if (element.date.toISOString().split('T')[0] == date) {
                    result = element
                }
            });
        }else{
            result = null;
        }
    }else{
        result = dailyData
    }
    return result;
}

module.exports = {
    fetchDailyV1
}