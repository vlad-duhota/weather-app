// routers
import {
    Routes,
    Route,
} from "react-router-dom"


// components
import DayPage from "../dayPage/dayPage"
import ForecastNav from "../forecastNav/forecastNav"
import MainPage from "./MainPage"

const MainPageInfo = (props) => {
    const s = props.s

    const forecast = props.forecast
    const days = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', "п'ятниця", 'субота']
    let realDays = []
    let realDaysData = []

    const forecastItems = forecast.map((forecastItem, index) => {
        const forecastDate = new Date(forecastItem.date)
        const forecastDay = days[forecastDate.getDay()]
        realDays.push(forecastDay)
        realDaysData.push(forecastItem)

        return (<Route key={'dayroute' + index} path={'/' + forecastDay} element={<DayPage day={forecastDay} forecast={forecastItem} />} />)
    })

    return (
        <div className={s.info}>
            <Routes>
                <Route path={'/weather-app'} element={<MainPage s={props.s} weather={props.weather} />} />
                {forecastItems}
            </Routes>


            <div className={s.forecast}>
                <h3>Дні тижня:</h3>
                <ForecastNav days={realDays} forecast={realDaysData} />
            </div>
        </div>
    )
}

export default MainPageInfo