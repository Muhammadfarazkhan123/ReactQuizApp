const reducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_SCORE": {
      return { ...state, score: action.score };
    }
    //   case "REMOVE_USER": {
    //     console.log(action, "action");
    //     return { ...state, user: null };
    //   }
    default: {
      return state;
    }
  }
};

export default reducer;
