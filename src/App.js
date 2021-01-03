import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarsPage from './pages/CarsPage';

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/cars"><CarsPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
