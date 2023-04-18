import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Housing from './pages/Housing'
import Error from './components/Error'

const GlobalStyle = createGlobalStyle`
    body {
      // border: 1px solid black;
      // max-width: 90%;
      margin: 0 auto;
      font-family: Montserrat, sans-serif;
      position: relative;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='/housing/:id' element={<Housing/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);