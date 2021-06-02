// import LOGIN from '../actions/index';


const Initial_State = {};


function loginReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    default:
      return state;
  }
}
export default loginReducer;