export const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: { text: post.text, id: post.id },
  };
};
export const storeLogin = () => {
  return {
    type: "AUTH_SUCCESS"
  };
};
export const logoutUser = () => {
  return {
    type: "LOGOUT_SUCCESS"
  };
};
export const createUser = (payload) => {
  return {
    type: "CREATE_USER",
    payload
  };
};