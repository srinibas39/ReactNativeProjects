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
        try {
            await AsyncStorage.setItem("token", token);
            console.log("Token saved successfully.");
        } catch (error) {
            console.log("Error saving token:", error);
        }
    };

    const removeTokenFromDB = async () => {
        try {
            await AsyncStorage.removeItem("token");
            console.log("Token removed successfully")
        }
        catch (error) {
            console.log("hello".error);
        }
    }


    const setToken = (token) => {
        authDispatch({ type: "SET_TOKEN", payload: { token } });
        setTokenInDB(token);
    };

    const getTokenFromDB = async () => {
        try {
            const res = await AsyncStorage.getItem("token");
            setToken(res)
        }
        catch (error) {
            console.log(error);
        }
    }
    const logout = () => {
        authDispatch({ type: "LOGOUT" });
        removeTokenFromDB()
    };

    const value = {
        token: authState.token,
        isToken: authState.isToken,
        setToken: setToken,
        logout: logout,
        getTokenFromDB: getTokenFromDB,
        setTokenInDB: setTokenInDB,
        removeTokenFromDB: removeTokenFromDB
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
