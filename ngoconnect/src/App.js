import Home from './components/home';
import About from './components/about';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";

function App() {
  return (
    <>
    
      <Router>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          
        
      </Router>

</>
    
  );
}

export default App;
