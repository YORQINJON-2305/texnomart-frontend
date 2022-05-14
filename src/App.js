import './App.css';
import Home from './routes/home/Home';
import { Switch, Route } from "react-router-dom"
import Admin from './routes/admin/Admin';
import AllProducts from './components/all-products/AllProducts';
import Update from "./components/update/Update" 




function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
      </Switch>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/all-products">
          <AllProducts/>
        </Route>
        <Route path="/update">
          <Update/>
        </Route>
    </div>
  );
}

export default App;
