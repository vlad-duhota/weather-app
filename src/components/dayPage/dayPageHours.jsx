const DayPageHours = (props) => {
    const s = props.s
    let forecast = props.forecast
    forecast = forecast.filter((_, index) => index % 3 === 2);

    const hoursList = forecast.map((forecastItem, index) => {
        const currHour = new Date(forecastItem.time)
        const currTime = currHour.getHours() + ':00'

        return (
            <div className={s.nav__item} key={'hoursItem' + index}>
                <h4 className={s.nav__day}>{currTime}</h4>
                <img className={s.nav__icon} src={forecastItem.condition.icon} alt={forecastItem.time + ' icon'} />
                <div className={s.nav__temp}>
                    <p>
                        {forecastItem.temp_c} <span>° C </span>
                    </p>
                </div>
            </div>
        )
    })

    return (
        <div className={s.nav + ' ' + props.className}>
            {hoursList}
        </div>
    )
}

export default DayPageHours