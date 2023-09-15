const initialState: GlobalState.UserState = {
  userData: {
    username: '',
    id: 0,
    email: ''
  }
}

export const userReducer = (state: GlobalState.UserState = initialState, action: GlobalState.UserAction) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_USER':
      return {...state, userData: payload};
    default:
      return state;
  }
}
