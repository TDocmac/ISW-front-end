import React from 'react';
import Home from './Views/Home'
import Nabvar from './Components/Navbar/Nabvar'
import Footer from './Components/Footer/Footer'
import {  BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';

import Admission from './Views/Admission'
import PersonnelAdmission from './Views/PersonnelAdmission'
import PersonnelListView from './Views/PersonnelListView'

import SillonAdmission from './Views/SillonAdmission'
import SillonesListView from './Views/SillonesListView';

import SalaAdmission from './Views/SalaAdmission'
import SalasListView from './Views/SalasListView';


function App() {
  return (
    <div className="App">
      <Router>
      <Nabvar></Nabvar>
        <Route
        exact
        path='/home'
        component={Home}        />
        <Route
        exact
        path='/admission'
        component={PersonnelAdmission}/>
        <Route
        exact
        path='/personal'
        component={PersonnelListView}/>
        <Route
        exact
        path='/admissionS'
        component={SillonAdmission}/>
        <Route
        exact
        path='/sillones'
        component={SillonesListView}/>
        <Route
        exact
        path='/admissionSala'
        component={SalaAdmission}/>
        <Route
        exact
        path='/salas'
        component={SalasListView}/>
      </Router>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
