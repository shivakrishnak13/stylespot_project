const initialState = {
  loggedIn: false,
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true ,payload: action.payload};
    case "LOGOUT":
      return { loggedIn: false };
    default:
      return state;
  }
}
