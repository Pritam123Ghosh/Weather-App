import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24,
    temp: 25,
    tempMin: 85,
    tempMax: 25,
    humidity: 48,
    weather: "haze",
  });

let updateInfo = (newInfo) =>{
  setWeatherInfo(newInfo)
}

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{textDecoration:"underline", color:"blue"}}>Weather App By Pritam</h2>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
