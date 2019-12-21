export const anotherName = name => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "CHANGE_NAME", payload: res[0].name });
      });
  };
};

export const addwish = wish => {
  return {
    type: "ADD_WISH",
    payload: wish
  };
};
