import React from "react"
import { Link } from "react-router-dom"
import s from './forecastNav.module.css'

const ForecastNav = (props) => {
    const forecast = props.forecast
    const navLinks = props.days.map((day, index) => {
        const currentForecast = forecast[index]
        const currentDay = currentForecast.day

        return (
            <Link key={'navLink' + index} className={s.nav__item} to={'/' + day}>
                <h4 className={s.nav__day}>{day}</h4>
                <img className={s.nav__icon} src={currentDay.condition.icon} />
                <div className={s.nav__temp}>
                    <p>
                        Мін: {currentDay.mintemp_c} <span>° C </span>
                    </p>
                    <p>
                        Мах: {currentDay.maxtemp_c} <span>° C </span>
                    </p>
                </div>
            </Link>
        )
    })

    return (
        <div className={s.nav}>
            {navLinks}
        </div>
    )
}

export default ForecastNav