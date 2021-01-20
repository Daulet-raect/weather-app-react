import React from "react";
import Info from "./components/Info/info";
import Form from "./components/form/form";
import Weather from "./components/weather/weather";
import {connect} from "react-redux";
import {GetWeather, SetData} from "./reducers/WeatherReducer";

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form getWeather={this.props.getWeather}/>
                                <Weather
                                    humidity={this.props.humidity}
                                    temp={this.props.temp}
                                    city={this.props.city}
                                    country={this.props.country}
                                    sunset={this.props.sunset}
                                    error={this.props.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const AppContainer = (props) => {

    const getWeather = async (city) => {

        if (city) {
            props.GetWeather(city)
        } else {
            props.SetData({
                temp: null,
                city: null,
                country: null,
                sunrise: null,
                sunset: null,
                error: "Укажите город",
                humidity: null,
            })
        }
    }

    return <App {...props} getWeather={getWeather}/>

}

const mapStateToProps = (state) => ({
    temp: state.Weather.temp,
    city: state.Weather.city,
    country: state.Weather.country,
    sunrise: state.Weather.sunrise,
    sunset: state.Weather.sunset,
    error: state.Weather.error,
    humidity: state.Weather.humidity
})

export default connect(mapStateToProps, {GetWeather, SetData})(AppContainer)