const initialState = {
  users: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
