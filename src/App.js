// import logo from './logo.svg';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import NavbarSecond from './components/NavbarSecond';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <NavbarSecond />
      <Routes>
        <Route exact path='/' element={<MainPage/>} ></Route>
        <Route path='/productos' element={<ProductList/>} ></Route>
        <Route path='/details' element={<Details />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route element={<Default/>}></Route>
      </Routes> 
      <Modal></Modal>
      <Footer />
    </React.Fragment>
  );
}

export default App;
