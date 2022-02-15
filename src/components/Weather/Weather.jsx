import React, { useEffect, useState } from 'react'
import { weatherAPI } from '../../api/weatherApi'
import { ipAPI } from '../../api/ipApi'
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

    const [input, setInput] = useState('')
    const [location, setLocation] = useState(initialLocation)
    const [weather, setWeather] = useState(initialWeather)

    useEffect(() => {

        const setDefaultLocation = async () => {

            let response = await ipAPI.getCurrentIP()
            const currentIP = response.data.ip

            response = await ipAPI.getIpInfo(currentIP)
            setInput(response.data.city)
            setData(response.data.city)
        }

        if (!input) {
            setDefaultLocation()
        }
    }, [input])

    const setData = async (input) => {

        const response = await weatherAPI.requestCurrentWeather(input)
            
        // TODO: error handling
        // debugger

        const {country, localtime, name} = response.data.location
        setLocation({country, localtime, name})

        const {condition, temp_c} = response.data.current
        setWeather({condition, temp_c})
        // console.log(response.data)
    }

    const handleEvent = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();

            setData(input)
        }
    }

    return (
        <div className={s.main}>
            <div className={s.searchBox}>    
                <input 
                    type='text'
                    autoComplete='false'
                    placeholder='Search...'
                    onChange={(e) => setInput(e.target.value)}
                    onKeyUp={async (e) => { handleEvent(e) }}>
                </input>
            </div>

            <div className={s.location}>
                {location.name && 
                    <div className={s.name}> {location.name}, {location.country} </div>
                }
                <div className={s.date}> {location.localtime} </div>
            </div>

            <div className={s.tempBox}>
                {weather.temp_c &&
                    <div className={s.temperature}> {weather.temp_c + '°c'} </div>
                }
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