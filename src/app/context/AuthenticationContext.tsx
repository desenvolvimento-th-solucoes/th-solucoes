import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { User } from "../types/User";

type Props = {
    children: React.ReactNode;
}

export type Auth = {
    localStorageData: LocalStorage;
    setLocalStorageData: React.Dispatch<React.SetStateAction<LocalStorage>>;
    loginManager: () => Promise<void>;
    logout: () => Promise<void>;
}

type LocalStorage = {
    isLogged: boolean;
    loggedUser: User | null;
    allowCookies?: boolean;
}

export const AuthenticationContext = createContext<Auth | null>(null);
const LOCAL_STORAGE_KEY = "logged_user";

export const AuthenticationProvider: React.FC<Props> = ({ children }) => {
    const [localStorageData, setLocalStorageData] = useState<LocalStorage>({
        allowCookies: false,
        isLogged: false, 
        loggedUser: {
            id: 0,
            name: "",
            last_name: "",
            email: "",
            telephone: ""
        }
    });

    const loginManager = async () => {
        if (localStorage.getItem("allowCookies")) {
            const response = await api.check();
            if (response !== undefined && response.message === "Authenticated") {
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(response));
                setLocalStorageData({
                    isLogged: true,
                    loggedUser: {
                        id: response.logged_user.id,
                        name: response.logged_user.name,
                        last_name: response.logged_user.last_name,
                        email: response.logged_user.email,
                        telephone: response.logged_user.telephone,
                    }
                });
            } else {
                setLocalStorageData({ isLogged: false, loggedUser: null });
            }
        }
    }

    const logout = async () => {
        if (localStorage.getItem("allowCookies")) {
            const response = await api.destroy();
            if (response !== undefined && response.message === "The session was finished.") {
                setLocalStorageData({ isLogged: false, loggedUser: null });
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
        }
    }

    useEffect(() => {
        loginManager();
    }, [])

    return (
        <AuthenticationContext.Provider value={{ localStorageData, setLocalStorageData, loginManager, logout }}>
            {children}
        </AuthenticationContext.Provider>
    )
}