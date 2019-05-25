import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'

//purpose of this app don't need to save password
function mapStateToProps(state) {
    return {
        name: state.Patient.name,
    }
}

class DoctorView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }


  };

  render() {
    return (
      <div className="Login">
        <Link to='/doctor'>Back</Link>
        <h2>Your Patients</h2>
        <ListGroup>
        <ListGroupItem>{this.props.name}</ListGroupItem>
        <ListGroupItem>{this.props.name}</ListGroupItem>
        <ListGroupItem>{this.props.name}</ListGroupItem>
        <ListGroupItem>{this.props.name}</ListGroupItem>
        <ListGroupItem>{this.props.name}</ListGroupItem>
      </ListGroup>
    </div>
    )
  }
}

export default connect(mapStateToProps)(DoctorView)