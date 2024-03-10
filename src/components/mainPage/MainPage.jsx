// icons
import icon1 from '../../imgs/icon_1.svg'
import icon2 from '../../imgs/icon_2.svg'
import icon3 from '../../imgs/icon_3.svg'

const MainPage = (props) => {
    const s = props.s
    const weather = props.weather

    return (
        <>
            <img className={s.mainIcon} src={weather.current.condition.icon} alt="current weather icon" />
            <h1>{weather.current.temp_c} <span>° C </span></h1>
            <h2>{weather.current.condition.text}</h2>
            <h3>Сьогодні</h3>
            <ul className={s.list}>
                <li>
                    <img src={icon3} alt="wind icon" />
                    <p>Вітер: {weather.current.wind_kph}km/h</p>
                </li>
                <li>
                    <img src={icon2} alt="humidity icon" />
                    <p>Вологість: {weather.current.humidity}%</p>
                </li>
                <li>
                    <img src={icon1} alt="rain icon" />
                    <p>Хмарність: {weather.current.cloud}%</p>
                </li>
            </ul>
        </>
    )
}

export default MainPage