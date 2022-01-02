const reducer = (state = false, action) => {
  switch (action.type) {
    case "LOGGED":
      return state = action.payload;
    default:
      return state;
  }
};

export default reducer;