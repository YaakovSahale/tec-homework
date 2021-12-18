import { useState } from "react";
import "./App.css";
import Reddit from "./components/Reddit";
import RedditParams from "./components/RedditParams";
import Unmount from "./components/Unmount";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      {/* <Reddit /> */}
      {/* <RedditParams input={"python"}/> */}
      {flag ? <Unmount /> : null}
      <button onClick={()=> setFlag(!flag)}>click</button>
    </div>
  );
}

export default App;
