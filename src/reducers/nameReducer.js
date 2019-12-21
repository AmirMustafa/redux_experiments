const nameReducer = (state = "", action) => {
  // console.log(action); - normally people use switch when many data is used
  if (action.type === "CHANGE_NAME") {
    return action.payload; // multiple reducer

    /* return { // single reducer
      ...state,
      name: action.payload
    }; */
  }
  return state;
};

export default nameReducer;
