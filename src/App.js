import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarsPage from './pages/CarsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      {/* If I render something before (or after) the router it will render always (in any route) */}
      {/* <p>blabla</p> */}
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/cars"><CarsPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
