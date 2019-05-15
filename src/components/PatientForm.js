import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function mapStateToProps(state) {
  return {
    name: state.Patient.name,
    age: state.Patient.age,
    email: state.Patient.email,
    mailingAddress: state.Patient.mailingAddress,
    phone: state.Patient.phone,
  }
}

class PatientForm extends Component {
  constructor(props) {
    super(props);
    let { name, age, email, mailingAddress, phone } = this.props;
    this.state = {
        name,
        age,
        email,
        mailingAddress,
        phone,
    }

    // this.handleSubmit = this.handleSubmit.bind(this);

  };

  // handleSubmit(event) {
//   }

  render() {
    let { name, age, email, mailingAddress, phone } = this.state;
    return (
      <div >
        <h1>------------------------------------</h1>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={name}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Age</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={age}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={email} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Mailing Address</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={mailingAddress} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Phone</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder={phone} />
        </FormGroup>
        <Button color="primary">primary</Button>
      </Form>
      <h1>------------------------------------</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(PatientForm)