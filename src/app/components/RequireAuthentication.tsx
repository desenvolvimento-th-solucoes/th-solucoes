import { useRouter } from "next/navigation";
import { Auth, AuthenticationContext } from "../context/AuthenticationContext"
import { useContext, useEffect } from "react";

type Props = { 
    children: React.ReactNode
    authenticationContext: Auth | null;
}

export const RequireAuthentication = ({ children }: Props) => {
    const router = useRouter();
    const authContext = useContext(AuthenticationContext);

    useEffect(() => {
        if(!authContext?.localStorageData.isLogged) {
            router.push("/restrict/login");
        }
    }, [router, authContext?.localStorageData.isLogged]);

    return authContext?.localStorageData.isLogged ? <>{ children }</> : null;
}