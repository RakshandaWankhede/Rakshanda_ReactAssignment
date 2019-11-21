const istate = {
  name: '',
  password: '',
  accessToken: ''
};

const reducer = (state = istate, action) => {
  if (action.type === 'CHANGE_ACCESS_TOKEN') {
    return {
      ...state,
      accessToken: action.payload
    };
  }
  return state;
};

export default reducer;
