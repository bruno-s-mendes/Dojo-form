export const LOGIN = 'LOGIN';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

export const addClientes = value => ({ type: 'ADD_CLIENTES', payload: value });