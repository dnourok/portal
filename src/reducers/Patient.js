import { 
  UPDATE_NAME, 
  UPDATE_AGE, 
  UPDATE_EMAIL, 
  UPDATE_ADDRESS,
  UPDATE_PHONE 
} from '../helpers/constants';
import { patients as  patientInitialState } from '../helpers/data'
  
const Patient = (state = patientInitialState, action) => {
  switch (action.type) {
      case UPDATE_NAME:
        return {
          ...state,
          name: action.name
        };
      case UPDATE_AGE:
        return {
          ...state,
          age: action.age
        };
      case UPDATE_EMAIL:
        return {
          ...state,
          email: action.email
      };
      case UPDATE_ADDRESS:
        return {
          ...state,
          address: action.address
      };
      case UPDATE_PHONE:
        return {
          ...state,
          phone: action.phone
      };
      default:
        return state;
    }
}

  export default Patient;
  
  