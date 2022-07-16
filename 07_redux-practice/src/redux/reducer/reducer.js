let initialState = {
  count: 0,
};

function reducer(state = initialState, action) {
  console.log("action is", action);

  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  // } else if (action.type === "DECREMENT") {
  //   return { ...state, count: state.count - 1 };
  // }
  // return { ...state };

  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
}

export default reducer;
