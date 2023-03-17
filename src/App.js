import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './modules/front/Home';
import About from './modules/front/About';
import Contact from './modules/front/Contact';

function App() {
  return (
      <Router>
          <div className="App">
            <div>
              <h1>
                Header
              </h1>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>

            <Routes>
              <Route exact path='/' element={< Home />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>
          </div>
      </Router>
  );
}

export default App;
