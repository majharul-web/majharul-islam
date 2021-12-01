import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Social from './Pages/Shared/Social/Social';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import PortFolio from './Pages/PortFolio/PortFolio';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';


function App() {
  return (
    <div className='all-Components'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/portFolio'>
            <PortFolio></PortFolio>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/projectDetails/:id'>
            <ProjectDetails></ProjectDetails>
          </Route>
        </Switch>
        <Social></Social>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
