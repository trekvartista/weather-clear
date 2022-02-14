import React, { useState } from 'react'
import { weatherAPI } from '../../api/api'
import s from './Weather.module.css'

function Weather() {

    const initialLocation = {
        country: '',
        localtime: '',
        name: ''
    }

    const initialWeather = {
        temp_c: '',
        condition: {
        }
    }

    const [input, setInput] = useState()
    const [location, setLocation] = useState(initialLocation)
    const [weather, setWeather] = useState(initialWeather)

    const handleEvent = async (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();

            const response = await weatherAPI.requestCurrentWeather(input)
            
            // TODO: error handling
            // debugger

            const {country, localtime, name} = response.data.location
            setLocation({country, localtime, name})

            const {condition, temp_c} = response.data.current
            setWeather({condition, temp_c})
            console.log(response.data)
        }
    }

    return (
        <div className={s.main}>
            <input 
                type='text'
                className={s.searchBox}
                autoComplete='false'
                placeholder='Search...'
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={async (e) => { handleEvent(e) }}>
            </input>

            <div className={s.location}>
                <div className={s.name}> {location.name} {location.country} </div>
                {/* <div className={s.country}> {location.country} </div> */}
                <div className={s.date}> {location.localtime} </div>
            </div>

            <div className={s.tempBox}>
                <div className={s.temperature}> {weather.temp_c} </div>
            </div>

            <div className={s.weatherBox}>
                <div className={s.condition}> {weather.condition.text} </div>
                <div className={s.icon}>
                    <img src={weather.condition.icon} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Weather