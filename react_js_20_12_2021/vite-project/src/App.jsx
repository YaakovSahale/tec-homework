import "./App.css";
import { useState } from "react";
import ShowClick from "./components/ShowClick";
import ShowClicksUsingClass from "./components/ShowClicksUsingClass";
import ShowClicksUsingHooks from "./components/ShowClicksUsingHooks";
import Counter from "./components/Counter";
import Unmount from "./components/Unmount";

function App() {
  const [initialCount, setInitialCount] = useState(0);
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <ShowClick /> */}
      {/* <ShowClicksUsingClass/> */}
      {/* <ShowClicksUsingHooks/> */}
      <br />
      <input type="number" onChange={(e) => setInitialCount(e.target.value)} />
      <Counter initialCount={Number(initialCount)} />

      {/* <button onClick={() => setShow(!show)}>click</button>
      {show ? <Unmount /> : null} */}
    </div>
  );
}

export default App;
