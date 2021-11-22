import logo from './logo.svg';
import './App.css';
import AllFoods from './components/homeWork/exe/store/AllFoods'
import AllPeople from './components/homeWork/exe/pepole/AllPeople';
import AllChefFood from './components/homeWork/exe/pepole/AllChefFood';
import AllManagers from './components/homeWork/exe/managers/AllManagers';

function App() {
  return (
    <div className="App">
      <AllFoods/>
      <AllPeople/>
      <AllChefFood/>
      <AllManagers/>

    </div>
  );
}

export default App;
