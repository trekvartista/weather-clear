import Axios from "axios";

// var options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/ip.json',
//   params: {q: '<REQUIRED>'},
//   headers: {
//     'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
//     'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//   }
// };

// http://api.weatherapi.com/v1/current.json?key=806aa4362e50400e988173920221302&q=bishkek&aqi=no

const axios = Axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    // headers: {
    //     'key': '806aa4362e50400e988173920221302'
    // }
})

export const weatherAPI = {
    requestCurrentWeather: () => {
        return axios.get(`/current.json?key=806aa4362e50400e988173920221302&q=bishkek&aqi=no`)
                    .then(function (response) {
            	        console.log(response.data);
                    })
    }
}