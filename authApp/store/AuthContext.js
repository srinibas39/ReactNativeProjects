import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext({
    token: "",
    isToken: false,
    setToken: (token) => null,
    logout: () => null
});

export const AuthProvider = ({ children }) => {
    const authReducer = (state, action) => {
        switch (action.type) {
            case "SET_TOKEN":
                return { ...state, token: action.payload.token, isToken: !!action.payload.token };
            case "LOGOUT":
                return { ...state, token: "", isToken: false };
            default:
                return state;
        }
    };

    const [authState, authDispatch] = useReducer(authReducer, {
        token: "",
        isToken: false,
    });

    const setToken = (token) => {
        authDispatch({ type: "SET_TOKEN", payload: { token } });
    };

    const logout = () => {
        authDispatch({ type: "LOGOUT" });
    };

    const value = {
        token: authState.token,
        isToken: authState.isToken,
        setToken: setToken,
        logout: logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
