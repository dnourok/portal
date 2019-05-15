import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { SAVE_EMAIL, SAVE_ROLE } from '../helpers/constants'

function mapStateToProps(state) {
  return {
    email: state.Authentication.email,
    role: state.Authentication.email
  }
}

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      role: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

 email = emailAddress => {
    return {
      type: SAVE_EMAIL,
      emailAddress
    };
  };
  

  role = roleType => {
    return {
      type: SAVE_ROLE,
      roleType
    };
  }

  handleChange(event) {
    this.setState({email: event.target.value});

}

handleSubmit(event) {
  const roleType = this.state.email === 'test@email.com' ? 'doctor' : 'patient'

  this.props.dispatch({ type: 'SAVE_EMAIL', email: this.state.email });
  this.props.dispatch({ type: 'SAVE_ROLE', role: roleType });
  event.preventDefault();

    if (roleType === 'patient') {
        console.log('next step patient');
    } else if (roleType === 'doctor') {
        console.log('next step doctor');
    } else {
        console.log('sorry no access')
    }
}


  render() {
    return (
      <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bssize="large">
        <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            email={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bssize="large">
        <FormLabel>Password</FormLabel>
          <FormControl
            type="password"     
          />
        </FormGroup>
        <Button
          block
          bssize="large"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
    )
  }
}

export default connect(mapStateToProps)(LoginForm)