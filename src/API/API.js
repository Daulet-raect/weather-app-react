import * as axios from "axios";

const API = "785b051b4d7780be3adad788f65ce773"

export const WeatherAPI = {
    GetWeather(city)  {
        return axios.get
        (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`)
    }
}