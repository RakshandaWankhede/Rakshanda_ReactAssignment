const istate = {
  name: '',
  products: []
};

const reducer = (state = istate, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {
      ...state,
      name: action.payload
    };
  }
  if (action.type === 'PRODUCTS_UPDATE') {
    return {
      ...state,
      products: action.payload
    };
  }
  return state;
};

export default reducer;
