import React from 'react';
import { weatherAPI } from '../api/api';

function Weather() {

    const getWeather = () => {
        weatherAPI.requestCurrentWeather();
    }

    return (
        <div>
            <button onClick={() => getWeather()}>
                request weather
            </button>
        </div>
    )
}

export default Weather