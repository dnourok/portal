import React from 'react'
import { render } from 'react-dom'
import LoginForm from './components/LoginForm'
import PatientForm from './components/PatientForm'
import DoctorView from './components/PatientList'
import { Provider } from 'react-redux'
import store from './helpers/store';

const App = () => (
  <Provider store={store}>
    <div>
      <h2>Healthcare App</h2>
      <LoginForm/>
      <PatientForm/>
      <DoctorView/>
    </div>
  </Provider>
)

render(<App />, document.getElementById('root'))
