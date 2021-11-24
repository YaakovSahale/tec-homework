
import './App.css';
import Counter from './components/Counter';
import TwoCounters from './components/TwoCounters';
import LongText from './components/LongText';
import ShowHIde from './components/ShowHIde';

function App() {
  return (
    <div className="App">
      {/* <TwoCounters/> */}
      {/* <LongText text={"123456789"}/> */}
      <ShowHIde text={"i was wondering if after all this years"}/>
    </div>
  );
}

export default App;
