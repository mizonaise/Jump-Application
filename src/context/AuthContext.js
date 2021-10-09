import { useState, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider(Props) {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {Props.children}
        </AuthContext.Provider>
    );
}