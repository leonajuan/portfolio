import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
