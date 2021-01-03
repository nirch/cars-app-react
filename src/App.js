import axios from 'axios';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarModel from './model/CarModel';
import CarDeatilsPage from './pages/CarDeatilsPage';
import CarsPage from './pages/CarsPage';
import HomePage from './pages/HomePage';

function App() {
  const [cars, setCars] = useState(null);

  useEffect(()=>{
    axios.get("cars.json").then(res=>{
        setCars(res.data.map(plainCar => new CarModel(plainCar)));
    });
  }, []);



  return (
    <div>
      {/* If I render something before (or after) the router it will render always (in any route) */}
      {/* <p>blabla</p> */}
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/cars"><CarsPage cars={cars} onAddCar={newCar=>setCars(cars.concat(newCar))}/></Route>
          <Route exact path="/cars/:index"><CarDeatilsPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
