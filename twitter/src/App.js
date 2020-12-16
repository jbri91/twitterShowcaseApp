import "./App.css";
import Navigationbar from './components/NavigationBar'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Random from './Pages/Random'
import Search from './Pages/Search'
import TransparentBox from "./components/TransparentBox";

function App() {
  return (
    <Router>
    <div className="App" >
      <Navigationbar />
      <TransparentBox />
    <Switch>
    <Route path='/' component={Random} />
    <Route path='/search' component={Search} />
    </Switch>
    </div>
    </Router>
  );
}

export default App;
