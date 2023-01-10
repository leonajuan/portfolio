import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/resume'>
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <About />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
