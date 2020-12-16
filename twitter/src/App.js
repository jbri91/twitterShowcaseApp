import "./App.css";
import Navigationbar from './components/NavigationBar'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Random from './Pages/Random'
import Search from './Pages/Search'

function App() {
  return (
    <Router>
    <div className="App" >
      <Navigationbar />
    </div>
    <Switch>
    <Route path='/' component={Random} />
    <Route path='/search' component={Search} />
    </Switch>
    </Router>
  );
}

export default App;
