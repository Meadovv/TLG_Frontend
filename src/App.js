import './App.scss';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Thư viện Router
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav></Nav>
        <Switch>
          <Route path="/about">
            about
          </Route>
          <Route path="/news">
            news
          </Route>
          <Route path="/contact">
            contact
          </Route>
          <Route path="/" exact>
            Home
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="*">
            Not found
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
