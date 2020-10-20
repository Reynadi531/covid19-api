const axios = require('axios');
const { permittedCrossDomainPolicies } = require('helmet');

const fetchDailyV1 = async(date) => {
    const { data } = await axios.get('https://covid19.who.int/page-data/index/page-data.json');
    const rootData = data.result.pageContext.rawDataSets;
    let result = {};
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
                let dateDisasamble = date.split('-') 
                // console.log(dateDisasamble)
                // console.log(element.date.getFullYear());
                // console.log(element.date.getMonth())
                // console.log(Number(dateDisasamble[1] - 1))
                console.error(dateDisasamble[0], dateDisasamble[1], dateDisasamble[2])
                if (element.date.getFullYear() == Number(dateDisasamble[0]) && element.date.getMonth() == Number(dateDisasamble[1]-1) && element.date.getDate() == Number(dateDisasamble[2])) {
                    result = element
                }else {
                    result = null
                }
            });
        }else{
            result = null
        }
    }else{
        result = dailyData
    }
    return result;
}

module.exports = {
    fetchDailyV1
}