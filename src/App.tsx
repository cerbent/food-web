import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./compenents/Header";
import {Route, Routes} from "react-router-dom";
import Admin from "./compenents/Admin";
import Menu from "./compenents/Menu/Menu";
import Order from "./compenents/Order/Order";
import Exam from "./compenents/Exam";
import Accordion from "./compenents/Acardion";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/admin'} element={<Admin/>}/>
          <Route path={'/'} element={<Menu/>}/>
          <Route path={'/order'} element={<Order/>}/>
          <Route path={'/exam'} element={<Exam/>}/>
          <Route path={'/accordion'} element={<Accordion/>}/>
      </Routes>
    </div>
  );
}

export default App;
