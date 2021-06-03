const Initial_State = [];

function cadastroReducer(state = Initial_State, action) {
  switch (action.type) {
    case 'ADD_CLIENTES':
      return [...state, action.payload];
      default:
      return state;
  }
}
export default cadastroReducer;