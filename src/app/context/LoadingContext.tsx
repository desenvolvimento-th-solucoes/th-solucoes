import { useRouter } from "next/router";
import { createContext, Dispatch, SetStateAction, useState, useEffect, ReactNode, useContext } from "react";
import { LoadingScreen } from "../components/LoadingScreen";

type LoadingContextProps = {
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextProps | null>(null);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState(false);
    const [destroy, setDestroy] = useState(true);
    const navigate = useRouter();

    const handleStart = () => {
        setLoading(true);
        setDestroy(false);
    };

    const handleComplete = () => {
        setTimeout(() => {
            setLoading(false);
        }, 900);
        setTimeout(() => {
            setDestroy(true);
        }, 1300);
    };

    useEffect(() => {
        navigate.events.on('routeChangeStart', handleStart);
        navigate.events.on('routeChangeComplete', handleComplete);
        navigate.events.on('routeChangeError', handleComplete);

        return () => {
            navigate.events.off('routeChangeStart', handleStart);
            navigate.events.off('routeChangeComplete', handleComplete);
            navigate.events.off('routeChangeError', handleComplete);
        };
    }, [navigate.events]);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
            <LoadingScreen destroy={destroy} enable={loading} />
        </LoadingContext.Provider>
    )
}