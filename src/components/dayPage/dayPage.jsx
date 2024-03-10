// icons
import icon1 from '../../imgs/icon_1.svg'
import icon2 from '../../imgs/icon_2.svg'
import icon3 from '../../imgs/icon_3.svg'

// styles
import s from './dayPage.module.css'
import mainS from '../mainPage/mainPage.module.css'
import navS from '../forecastNav/forecastNav.module.css'

// components
import DayPageHours from './dayPageHours'

const DayPage = (props) => {
    const weather = props.forecast.day
    const hours = props.forecast.hour

    return (
        <>
            <img className={mainS.mainIcon} src={weather.condition.icon} alt="current weather icon" />
            <h1>{weather.avgtemp_c} <span>° C </span></h1>
            <h2>{weather.condition.text}</h2>
            <h3>{props.day}</h3>
            <ul className={mainS.list}>
                <li>
                    <img src={icon3} alt="wind icon" />
                    <p>Вітер: {weather.maxwind_kph}km/h</p>
                </li>
                <li>
                    <img src={icon2} alt="humidity icon" />
                    <p>Вологість: {weather.avghumidity}%</p>
                </li>
                <li>
                    <img src={icon1} alt="rain icon" />
                    <p>Хмарність: {weather.cloud}%</p>
                </li>
            </ul>
            <div className={s.hours__wrap}>
                <h3>Години:</h3>
                <DayPageHours s={navS} forecast={hours} className={s.hours} />
            </div>
        </>
    )
}

export default DayPage