import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import PatientForm from './components/PatientForm'
import DoctorView from './components/PatientList'

const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LoginForm}/>
      <Route path='/patient' component={PatientForm}/>
      <Route path='/doctor' component={DoctorView}/>
    </Switch>
  </main>
)

export default App
