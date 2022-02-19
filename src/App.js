import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import EmployeeList from './Components/EmployeeList';
import CreateEmployee from './Components/CreateEmployee';
import {EditEmployee} from './Components/EditEmployee';
import Test from './Components/Test';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const App = () =>{
    return (
      <div>
          <Router>
              <HeaderComponent/>
              <div className="container">
                <Routes>
                    <Route path='/' exact={true} element={<EmployeeList/>}/>
                    <Route path='/employees' exact={true} element={<EmployeeList/>}/>
                    <Route path='/add-employee' exact={true} element={<CreateEmployee/>}/>
                    <Route path='/employees/:id' exact={true} element={<EditEmployee/>}/>

                    <Route path='/test' exact={true} element={<Test/>}/>
                </Routes>
              </div>
              <FooterComponent/>
          </Router>
      </div>
    );
}
export default App;