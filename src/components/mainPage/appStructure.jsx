// hooks
import { useEffect, useState, useRef } from "react"

// libs css
import s from './mainPage.module.css'
import 'react-toastify/dist/ReactToastify.css'

// libs
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

// components
import MainPageInfo from "./mainPageInfo"
import MainPageSearch from "./mainPageSearch"

const AppStructure = (props) => {

    const [weather, setWeather] = useState(null)
    const [forecast, setForecast] = useState(null)
    const [location, setLocation] = useState('London')

    const refs = {
        searchInput: useRef()
    }

    useEffect(() => {
        // weather
        axios.get(`https://api.weatherapi.com/v1/current.json?key=82130c35c5e044afaf4184922230207&q=${location}&aqi=yes&lang=uk`, { validateStatus: false })
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error.message)
                } else {
                    setWeather(res.data)
                }
            })

        // forecast
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=82130c35c5e044afaf4184922230207&q=${location}&days=7&aqi=no&alerts=no&lang=uk`, { validateStatus: false })
            .then(res => {
                if (res.data.error) {
                    toast.error(res.data.error.message)
                } else {
                    setForecast(res.data.forecast.forecastday)
                }
            })

    }, [location])

    const geolocationHandle = (e) => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation(position.coords.latitude + ',' + position.coords.longitude)
        })
    }

    const handleNewLocation = (e) => {
        const value = refs.searchInput.current.value
        if (value) {
            setLocation(value)
            refs.searchInput.current.value = ''
        }
    }
    if (!weather || !forecast) {
        return (
            <div className={s.mainPage}>
                <div className={s.container + ' container'}>
                    Loading...
                    <span className="loader"></span>
                </div>
                <ToastContainer position="bottom-left" />
            </div>
        )
    }

    const dayClass = weather.current.is_day === 0 ? s.mainPage__dark : ''

    return (
        <div className={s.mainPage + ' ' + dayClass} >
            <div className={s.container + ' container'}>
                <MainPageInfo s={s} weather={weather} forecast={forecast} />
                <MainPageSearch s={s} weather={weather} geolocationHandle={geolocationHandle} handleNewLocation={handleNewLocation} refs={refs} />
            </div>
            <ToastContainer position="bottom-left" />
        </div>
    )
}

export default AppStructure