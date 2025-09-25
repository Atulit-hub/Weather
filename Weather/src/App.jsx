import { useState,useEffect} from 'react'
import './App.css'
import {Search} from './Search'
import {WeatherCard} from './WeatherCard'

function App() {
  const[cnt,setCnt] = useState(0);
  const[city,setCity] = useState("London");
  const[weather,setWeather] = useState({});
  const apiKey = "2e585c8d4f5342f5988102042252509";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setWeather({
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        icon: "https:" + data.current.condition.icon,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        wind: data.current.wind_kph,
      })
    })
  },[cnt])

  function change(e){
    setCity(e.target.value);
  }
  function handleClick(){
    setCnt(cnt+1);
  }
  return (
    <>
      <div>
        <Search changeCity={change} update={handleClick}></Search>
        <WeatherCard weather={weather}></WeatherCard>

      </div>
    </>
  )
}

export default App
