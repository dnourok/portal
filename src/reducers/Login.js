import { SAVE_EMAIL, SAVE_ROLE } from '../helpers/constants'

const authentication = {
  email: '',
  role: ''
};

const Authentication = (state = authentication, action) => {
  switch (action.type) {
      case SAVE_EMAIL:
        return {
          ...state,
          email: action.email
        };
      case SAVE_ROLE:
        return {
          ...state,
          role: action.role
        };
      default:
        return state;
    }
}

export default Authentication;

