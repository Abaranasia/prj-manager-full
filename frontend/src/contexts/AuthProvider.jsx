/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react";
import AuthContext from "./AuthContext";

export const INITIAL_STATE = {
    userId: "",
    userName: "",
    token: ""
};
const loadUserFromStorage = () => {
    return JSON.parse(sessionStorage.getItem('auth'))
};

const cleanUserFromStorage = () => {
    sessionStorage.removeItem('auth');
};

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState(loadUserFromStorage || {});

     useEffect(() => {
        setUserToStorage()
    }, [auth]);

    const setUserToStorage = () => {
        
        if (auth?.token) sessionStorage.setItem('auth', JSON.stringify(auth));
    };



    const memoProvider = useMemo(() => ({
        auth,
        setAuth,
        loadUserFromStorage,
        cleanUserFromStorage
    }),
         [auth])

    return (
        <AuthContext.Provider value={memoProvider}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;