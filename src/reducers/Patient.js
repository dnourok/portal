const patientInitialState = {
    name: 'Derby Mann',
    age: '22',
    email: 'dman@gmail.com',
    mailingAddress: '23121 street',
    phone: '232-333-333'    
  };
  
  const Patient = (state = patientInitialState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
          return {
            ...state,
            name: action.name
          };
        case 'UPDATE_AGE':
          return {
            ...state,
            age: action.age
          };
        case 'UPDATE_EMAIL':
          return {
            ...state,
            email: action.email
        };
        case 'UPDATE_ADDRESS':
          return {
            ...state,
            address: action.address
        };
        case 'UPDATE_PHONE':
          return {
            ...state,
            phone: action.phone
        };
        default:
          return state;
      }
  }
  
  export default Patient;
  
  