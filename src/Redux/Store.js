import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk";
import {WeatherReducer} from "../reducers/WeatherReducer";
import {reducer as FormReducer} from "redux-form"

const reducers = combineReducers({
        Weather : WeatherReducer,
        form: FormReducer,
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware),)

window.store = store

export default store