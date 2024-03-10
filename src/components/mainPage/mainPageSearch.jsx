// icons
import icon4 from '../../imgs/icon_4.svg'
import icon5 from '../../imgs/icon_5.svg'

const MainPageSearch = (props) => {
    const s = props.s
    const weather = props.weather
    const geolocationHandle = s.geolocationHandle
    const handleNewLocation = s.handleNewLocation
    const refs = props.refs

    return (
        <div className={s.sidebar}>
            <div className={s.search}>
                <img className={s.searchIcon} src={icon4} alt="location icon" onClick={geolocationHandle} />
                <h3 className={s.location}>{weather.location.country}, {weather.location.region}, {weather.location.name}</h3>
            </div>
            <div className={s.searchForm}>
                <input type="text" placeholder="Місто" ref={refs.searchInput} />
                <button onClick={handleNewLocation}>
                    <img src={icon5} alt="search icon" />
                </button>
            </div>
        </div>
    )
}

export default MainPageSearch