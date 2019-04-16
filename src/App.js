import React, {Component} from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "08cd44a1c2fbb69d18b425f5d1a23c9d";


class App extends Component {

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        lat: undefined,
        lon: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
        console.log("json respo is ", api_call);
        const resp_json = await api_call.json();
        console.log("json resp is ", resp_json);

        // if country and city values are entered
        if (city && country) {
            this.setState({
                temperature: resp_json.main.temp,
                city: resp_json.name,
                country: resp_json.sys.country,
                lat: resp_json.coord.lat,
                lon: resp_json.coord.lon,
                error: ""
            })
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                lat: undefined,
                lon: undefined,
                error: "Please enter the valid details"
            })
        }

    };
    ;

    render() {
        return (

            <div>
                <Titles/>

                <Form getWeather={this.getWeather}/>

                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    lat={this.state.lat}
                    lon={this.state.lon}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
