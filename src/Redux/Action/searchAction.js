const updateUser = user => {
  console.log(user, "user in upduser");
  return dispatch => {
    // var user = 'khaaaaan';
    console.log(user, "userrrrr");
    dispatch({
      type: "UPDATE_USER",
      user: user
    });
  };
};

const removeUser = () => {
  return {
    type: "REMOVE_USER"
  };
};

export { updateUser, removeUser };
