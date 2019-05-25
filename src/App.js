import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import PatientForm from './components/PatientForm'
import DoctorView from './components/PatientList'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
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
