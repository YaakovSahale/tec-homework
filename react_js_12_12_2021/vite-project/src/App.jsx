import React, { Component } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Mentoring from "./pages/Mentoring";
import Testimonials from "./pages/Testimonials";
import PageNotFound from "./pages/PageNotFound";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navContainer">
            <p className="logo">
              <span>Yaakov </span>Sahale
            </p>
            <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
              <Link to={"/Courses"}>Courses</Link>
              <Link to={"/Events"}>Events</Link>
              <Link to={"/Testimonials"}>Testimonials</Link>
              <Link to={"/Mentoring"}>Mentoring</Link>
            </nav>
          </div>

          <div className="body">
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/About"} component={About} />
              <Route exact path={"/Contact"} component={Contact} />
              <Route exact path={"/Courses"} component={Courses} />
              <Route exact path={"/Events"} component={Events} />
              <Route exact path={"/Testimonials"} component={Testimonials} />
              <Route exact path={"/Mentoring"} component={Mentoring} />

              <Route component={PageNotFound} />
            </Switch>
          </div>
        </div>
        <footer className="footer">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt=""
            />
            <img
              src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1639327905~hmac=c346047cac69eddbb65277defcbd81ff"
              alt=""
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
              alt=""
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/udemy-3521779-2945277.png"
              alt=""
            />
          </div>
          <br />
          <p>© 2021 YAAKOV SAHALE. ALL RIGHTS RESERVED.</p>
        </footer>
      </BrowserRouter>
    );
  }
}
