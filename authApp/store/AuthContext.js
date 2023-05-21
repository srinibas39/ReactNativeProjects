import AsyncStorage from "@react-native-async-storage/async-storage";
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

    const setTokenInDB = async (token) => {
        const res = await AsyncStorage.setItem("token", token)
    }
    const removeTokenFromDB = async () => {
        const res = await AsyncStorage.removeItem("token");
    }

    const getTokenFromDB = async () => {
        const res = await AsyncStorage.getItem("token");
        return res;
    }

    const setToken = (token) => {
        authDispatch({ type: "SET_TOKEN", payload: { token } });
        setTokenInDB(token);
    };

    const logout = () => {
        authDispatch({ type: "LOGOUT" });
        removeTokenFromDB()
    };

    const value = {
        token: authState.token,
        isToken: authState.isToken,
        setToken: setToken,
        logout: logout,
        getTokenFromDB
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
