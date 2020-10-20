# COVID-19 API

This API was made cause of my curiosity what i take to get a data from official provider such as WHO. I use chrome developer tools to capture request and all of data in v1 from [here](https://covid19.who.int/page-data/index/page-data.json). Oh by the way if you find this API is slow that because it has to downlaod 2mb json file and i'm not setup cache system for it. Also i put this API in vercel at singapore region, if the latency was the problem you can deploy it by yourself in vercel and try others regions. This API still in progress for v2, the goal is to have one stop solution when came to search for COVID-19 API

## Deployment
>[JSON API](https://api-covid19.now.sh/)<br>
>[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FReynadi531%2Fcovid19-api%2F)

## Endpoints
### v1 (WHO)
* [/api/v1](https://api-covid19.now.sh/api/v1)
    > This endpoint gonna return the latest summary data 
* [/api/v1/yesterday](https://api-covid19.now.sh/api/v1/yesterday)
    > This endpoint gonna return yesterday summary data 
* [/api/v1/daily](https://api-covid19.now.sh/api/v1/daily)
    > This endpoint gonna return summary data from start of pandemic
* [/api/v1/daily/{date}](https://api-covid19.now.sh/api/v1/daily/{date})
    > This endpoint gonna return summary data of specific time.<br>
    > Example: [/api/v1/daily/2020-10-19](https://api-covid19.now.sh/api/v1/daily/2020-10-19)
* [/api/v1/countries](https://api-covid19.now.sh/api/v1/countries)
    > This endpoint gonna return summary data of all countires that have been affected
* [/api/v1/countries/{country}](https://api-covid19.now.sh/api/v1/countries/{country})
    > This endpoint gonna return summary data of specify country.<br>
    > Example: [/api/v1/countires/US](https://api-covid19.now.sh/api/v1/countries/US)

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

**[MIT license](http://opensource.org/licenses/mit-license.php)**
