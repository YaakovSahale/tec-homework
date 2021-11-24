import { Component } from "react";
import "./WeatherApi.css";
import axios from "axios";

export default class WeatherApi extends Component {
  state = { userCity: null, massage: null ,classStyle:null};
  getWeather = (e) => {
    e.preventDefault();
    const API_KEY = "dbb41d0d918eaf828404805e464a9fd2";
    const city = this.state.userCity;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    axios
      .get(URL)
      .then((res) => {
        this.setState({ classStyle:'goodReq' , massage:`the min temperature is ${(res.data.main.temp_min - 273.15).toFixed()}℃ ,the max temperature is ${(res.data.main.temp_max - 273.15).toFixed()}℃`})
        console.log(this.state.classStyle);
      })
      .catch((err) => {
          console.log(err.response.status);
          if(err.response.status === 404){
            this.setState({classStyle:'badReq' , massage: "That city could not be found."})
          }
      });
  };

  getValue = (e) => {
    this.setState({ userCity: e.target.value });
  };

  render() {
    return (
      <div className="WeatherApiContainer">
        <form onSubmit={this.getWeather} className="weatherForm">
          <h1>What's The Weather?</h1>
          <h3>Enter the name of a city</h3>
          <input className="inputCity" onChange={this.getValue} name="userCity" type="text" />
          <button className="btn" name="button" type="submit" value="submit">
            submit
          </button>
          <p className={this.state.classStyle}>{this.state.massage}.</p>
        </form>
      </div>
    );
  }
}
