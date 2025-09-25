export function WeatherCard({weather}){
    return(
        <div className="card">
            <h1>{weather.city} | {weather.region}</h1><br></br>
            <h2>{weather.country}</h2><br></br>
            <img src={weather.icon} alt={weather.condition} /><br />
            <h2>Temperature:{weather.temp} | Condition:{weather.condition}</h2><br></br>
            <h2>Windspeed:{weather.wind} km/hr</h2>
        </div>
    )
}