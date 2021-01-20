import React from "react";
import style from "./form.module.css"
import {Field, reduxForm, reset} from "redux-form"

const Form = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="input" type="text" name="city" placeholder="city"/>
            <button>Search</button>
        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset("weatherForm"))

const ReduxForm = reduxForm({form: "weatherForm", onSubmitSuccess: afterSubmit})(Form)

const WeatherForm = (props) => {
    let onSubmit = (city) => {
        props.getWeather(city.city)
    }

    return <ReduxForm onSubmit={onSubmit}/>
}

export default WeatherForm