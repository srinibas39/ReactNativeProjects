import axios from "axios";


const auth = async (mode, email, password) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyC1ACcNRvjABVxhXRThxZE4s9x5Uovrjqw`;
    const res = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });
    return res.data.idToken;
};

export const signup = async ({ email, password }) => {
    return auth("signUp", email, password);
};

export const login = async ({ email, password }) => {
    return auth("signInWithPassword", email, password);
};
