import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Single from './pages/Single';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>

      <Router>
      
          <Header/>
          <Switch>

            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/services' component={Services}/>
            <Route path='/single' component={Single}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/contact' component={Contact}/>

          </Switch>

          <Footer/>

      </Router>

    </div>


  );
}

export default App;
