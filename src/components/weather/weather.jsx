import React from "react";
//❄

const Weather = (props) => {
    return (
        <div className="infoWeath">
            {
                props.city &&
                <div>
                <p>Температура: {props.temp}</p>
                <p>Город: {props.city}</p>
                <p>Страна: {props.country}</p>
                <p>Заход солнца: {props.sunset}</p>
                <p>Влажность: {props.humidity}%</p>
                </div>
            }
            <p className="error">{props.error}</p>
        </div>
    )
}

export default Weather