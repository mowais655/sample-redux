const initialState = {
	posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      const tempPost = [...state.posts]
      tempPost.push(action.payload)
      return {...state, posts: tempPost};
    default:
      return state;
  }
};

export default postReducer;