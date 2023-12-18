import { useEffect, useState } from "react";
import { Fillable } from "../types/Fillable";
import { Form } from "./Form";
import { BsX } from "react-icons/bs";

type Props = {
    inputsForForm: Fillable[];
    visibility: boolean;
    performAction: () => void;
    onCloseWindow: () => void;
}

export const ModalForm = ({ inputsForForm, visibility, performAction, onCloseWindow }: Props) => {
    const [canHide, setCanShow] = useState(false);

    useEffect(() => {
        if (visibility) {
            setCanShow(false);
            return;
        }

        setTimeout(() => {
            setCanShow(true);
        }, 500);
    }, [visibility]);

    return (
        <main className={`${canHide ? "hidden" : "block"} ${visibility ? "opacity-1" : "opacity-0"} fixed min-h-screen inset-0 w-screen bg-white/70 z-10 flex items-center justify-center transition-all`}>
            <div className="bg-white shadow-xl p-10 rounded-lg border z-20 relative">
                <button onClick={onCloseWindow} className="absolute right-10 top-10 h-10 w-10 bg-red-600 flex items-center justify-center rounded-lg"><BsX className="text-3xl font-extrabold text-white"/></button>
                <Form action={performAction} title={"Edição de Usuário"} submitButtonLabel={"Atualizar"} inputs={inputsForForm} canSubmitFrom={false} />
            </div>
        </main>
    );
}