import React from 'react';
import Home from './Views/Home'
import Nabvar from './Components/Navbar/Nabvar'
import Footer from './Components/Footer/Footer'
import {  BrowserRouter as Router,  Route} from 'react-router-dom';
import './App.css';

//import Admission from './Views/Admission'
import PersonnelAdmission from './Views/PersonnelAdmission'
import PersonnelListView from './Views/PersonnelListView'
import EditPersonal from './Edit/EditPersonal'

import SillonAdmission from './Views/SillonAdmission'
import SillonesListView from './Views/SillonesListView';
//import SillonEditView from './Views/SillonEditView';
import EditSillon from './Components/Edit/EditSillon';

import SalaAdmission from './Views/SalaAdmission'
import SalasListView from './Views/SalasListView';
import EditSala from './Components/Edit/EditSala';


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
        path='/personal/edit/:id'
        component={EditPersonal}/>
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
        path='/sillones/edit/:id'
        component= {EditSillon}/>
        <Route
        exact
        path='/admissionSala'
        component={SalaAdmission}/>
        <Route
        exact
        path='/salas'
        component={SalasListView}/>
        <Route
        exact
        path='/salas/edit/:id'
        component={EditSala}/>
      </Router>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
