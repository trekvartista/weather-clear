import React, { useState } from 'react';
import { weatherAPI } from '../api/api';

function Weather() {

    const [state, setState] = useState()

    return (
        <div>
            <button onClick={async () => {
                const response = await weatherAPI.requestCurrentWeather()
                console.log(response.data)
                }}>
                request weather
            </button>
        </div>
    )
}

export default Weather