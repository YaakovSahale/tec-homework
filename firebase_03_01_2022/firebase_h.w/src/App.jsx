import { useEffect, useState } from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authenticated from "./pages/Authenticated";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

function App() {
  const [auth, setAuth] = useState(null);

  const LOCAL_AUTH = "localAuth";

  useEffect(() => {

    const localAuth = JSON.parse(localStorage.getItem(LOCAL_AUTH));
    localAuth ? setAuth(localAuth) : null;
  }, []);

  // function setLocalStorageExpireTime(){
    
  // }
  
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to={"/"}>Home</Link>

          {!auth ? (
            <>
              <Link to={"/Login"}>Login</Link>
              <Link to={"/Register"}>Register</Link>
              <Redirect to="/" />
            </>
          ) : (
            <>
              <Redirect to="/" />
              <Link to={"/Authenticated"}>Authenticated</Link>
              <button onClick={() => setAuth(null)}>log out</button>
            </>
          )}
        </nav>
        <br />
        <Switch>
          <Route exact path={"/"} render={() => <Home />} />
          <Route
            exact
            path={"/Login"}
            render={() => <Login setAuth={setAuth} LOCAL_AUTH={LOCAL_AUTH} />}
          />
          <Route
            exact
            path={"/Register"}
            render={() => (
              <Register setAuth={setAuth} LOCAL_AUTH={LOCAL_AUTH} />
            )}
          />
          <Route
            exact
            path={"/Authenticated"}
            render={() => <Authenticated email={auth} />}
          />
          <Route component={PageNotFound} />
        </Switch>
        <br />
      </div>
    </BrowserRouter>
  );
}

export default App;
