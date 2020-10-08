// console.log('Starting')
// setTimeout(() => {
//   console.log('2 Second Timer')
// }, 2000)
// setTimeout(() => {
//   console.log('0 Second Timer')
// }, 0)
// console.log('Stopping')

const request = require("request");

const hello = null;

//const geocode = require('./utils/geocode')
// const url = 'http://api.weatherstack.com/current?access_key=ccd6afb12bb43e8f3b89a9893e11c165&query=25.2684,55.2962&units=f'

// request({ url: url, json: true }, (error, response) => {
//   //console.log(response)
//   // const data = JSON.parse(response.body)
//   // console.log(data.current)
//   //console.log(response.body.current)
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     //console.log('Unable to find location')
//     console.log(response.body.error.info)
//   }
//   else {
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degree out. There is a ' + response.body.current.precip + ' % of rain')
//   }
// })

//Geocoding
//Address -> lat/long -> Weather

// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')
// const address = process.argv[2]
// if (!address) {
//   console.log('Please provide an address')
// } else {
//   geocode(address, (error, data) => {
//     debugger
//     if (error) {
//       return console.log('Error', error)
//     } else {
//       console.log('Data', data)
//       forecast(data.longitude, data.latitude, (error, forecastData) => {
//         if (error) {
//           return console.log('Error', error)
//         }
//         console.log(data.location)
//         console.log(forecastData)
//         // console.log('Forecast', data)
//       })
//     }
//   })
// }

//Destructing
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const address = process.argv[2];
if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log("Error", error);
    } else {
      //console.log('Data', data)
      forecast(longitude, latitude, (error, forecastData) => {
        if (error) {
          return console.log("Error", error);
        }
        console.log(location);
        console.log(forecastData);
        // console.log('Forecast', data)
      });
    }
  });
}
