import {WeatherAPI} from "../API/API";

const SET_DATA = "SET_DATA"

const initialState = {
    temp: null,
    city: null,
    country: null,
    sunrise: null,
    sunset: null,
    error: null,
    humidity: null,
}

export const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const SetData = (data) => {
    return {type: SET_DATA, data}
}

export const GetWeather = (city) => (dispatch) => {
    WeatherAPI.GetWeather(city).then(data => {
        let date = new Date()
        date.setTime(data.data.sys.sunset)
        let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        dispatch(SetData({
            temp: data.data.main.temp,
            city: data.data.name,
            country: data.data.sys.country,
            sunrise: data.data.sys.sunrise,
            sunset: sunsetDate,
            error: null,
            humidity: data.data.main.humidity}))
    })
}


