import Axios from "axios";

const axios = Axios.create({
    baseURL: 'http://api.weatherapi.com/v1',
    params: {
        key: '806aa4362e50400e988173920221302'
    }
})

export const weatherAPI = {
    requestCurrentWeather: (input) => {
        return axios.get(`/current.json?q=${input}&aqi=no`)
                    // .then(function (response) {
            	    //     console.log(response.data);
                    // })
    }
}