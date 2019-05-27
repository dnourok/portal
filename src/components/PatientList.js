import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom'

//purpose of this app don't need to save password
function mapStateToProps(state) {
    return {
        patients: state.Patient
    }
}

class DoctorView extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }
  };

  render () {
    const { patients } = this.props;

    return (
        <div>
          <Link to='/'>Back</Link>
            <ListGroup>
                <h1>Your Patients</h1>
                { patients.map(patient => 
                  <ListGroupItem>
                    {patient.name}
                  </ListGroupItem>
                )}
            </ListGroup>
          </div>
      )
  }

}

export default connect(mapStateToProps)(DoctorView)