import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Header from "./modules/front/Header";
import ProductList from "./modules/front/product/ProductList";
import Home from "./modules/front/Home";
import About from "./modules/front/About";
import Contact from "./modules/front/Contact";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path='/' element={< ProductList />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
