const initialState = {
	name: null,
	email: null,
  password: null,
  phoneNumber: null,
  profession: null,
	isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case "AUTH_SUCCESS":
			return { ...state, isAuthenticated: true};
    case "LOGOUT_SUCCESS":
      return { ...state, isAuthenticated: false};
    case "LOG_OUT_SUCCESS":
      return { ...state, name: initialState.name, email: initialState.email, password: initialState.password, phoneNumber: initialState.phoneNumber, profession: initialState.profession, isAuthenticated: false }
    case "CREATE_USER":
      const userData = action.payload;
      return { ...state, name: userData.name, email: userData.email, password: userData.password, phoneNumber: userData.phoneNumber, profession: userData.profession};
		
		default:
			return state;
	}
};

export default userReducer;
