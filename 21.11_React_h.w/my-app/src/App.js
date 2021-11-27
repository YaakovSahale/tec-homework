import { Component } from "react";
import AllFoods from "./components/homeWork/exe/store/AllFoods";
import AllPeople from "./components/homeWork/exe/pepole/AllPeople";
import AllChefFood from "./components/homeWork/exe/pepole/AllChefFood";
import AllManagers from "./components/homeWork/exe/managers/AllManagers";
import DisplayState from "./components/homeWork/25.11/DisplayState";
import Car from "./components/homeWork/25.11/Car";
import Movie from "./components/homeWork/25.11/movie";
import "./App.css";

class App extends Component {
  render() {
    const carObj = {
      module: "honda",
      price: 10200,
      img: "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg",
    };

    const movieObj = {
      name: "spuderman",
      resalesDate: 1998,
      mainActor: "shimi unra",
    };

    return (
      <div className="App">
        {/* <AllFoods/>
      <AllPeople/>
      <AllChefFood/>
      <AllManagers/> */}

        {/* <DisplayState/> */}
        <Car carObj={carObj} />
        <Movie movieObj={movieObj} />
      </div>
    );
  }
}

export default App;
