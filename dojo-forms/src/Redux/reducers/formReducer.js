import { ADD_PERSON } from '../actions/index';

const initialState = {
  people: [],
}

const formReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PERSON:
      return { ...state, people: [...state.people, action.payload] };
    default: 
      return state;
  }
}

export default formReducer;