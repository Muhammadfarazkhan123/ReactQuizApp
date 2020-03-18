const updateScore = score => {
  return dispatch => {
    console.log(score, "scorebbbb");
    dispatch({
      type: "UPDATE_SCORE",
      score: score
    });
  };
};

//   const removeUser = () => {
//     return {
//       type: "REMOVE_USER"
//     };
//   };

export { updateScore };
