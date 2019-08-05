const initialState = {
    appIsLogin: false,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOGIN':
            return {
                ...state,
                appIsLogin: true,
            };

        case 'SET_IS_LOGOUT':
            return {
                ...state,
                appIsLogin: false,
            };

        default:
            return state;
    }
};

export default AppReducer;
