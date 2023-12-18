import { Dispatch, SetStateAction, createContext, useState } from "react";

type AdminForms = {
    usersForm: boolean;
    passwordsForm: boolean;
}

type SubmitContextProps = {
    canSubmit: AdminForms;
    setCanSubmit: Dispatch<SetStateAction<AdminForms>>;
}

export const SubmitContext = createContext<SubmitContextProps | null>(null);

export const SubmitProvider = ({ children }: { children: React.ReactNode }) => {
    const [canSubmit, setCanSubmit] = useState<AdminForms>({usersForm: false, passwordsForm: false});

    return (
        <SubmitContext.Provider value={{ canSubmit, setCanSubmit }}>
            {children}
        </SubmitContext.Provider>
    )
}