import { useContext, useEffect, useState } from "react";
import { Fillable } from "../types/Fillable";
import { SimpleInput } from "./SimpleInput";
import { ButtonDefault } from "./button/ButtonDefault";
import { SubmitContext } from "../context/SubmitContext";

type Props = {
    title: string;
    edit?: boolean;
    submitButtonLabel: string;
    inputs: Fillable[];
    canSubmitFrom: boolean;
    formFor?: string;
    action: () => void;
}

export const Form = ({ action, edit, formFor, inputs, title, submitButtonLabel }: Props) => {
    const [simpleInputs, setSimpleInputs] = useState<React.ReactNode[]>([]);
    const context = useContext(SubmitContext);

    const isFormValid = () => {
        for (let i = 0; i < inputs.length; i++) {
            const inputElement = document.getElementById(inputs[i].inputId) as HTMLInputElement;
            if (inputElement) {
                if (inputElement.nextElementSibling && inputElement.nextElementSibling.textContent !== "") {
                    return false;
                }

                if (inputElement.value === "") {
                    return false;
                }
            }
        }
        return true;
    }

    useEffect(() => {
        let inputNode: React.ReactNode[] = [];
        let canValidate = false;

        for (let i = 0; i < inputs.length; i++) {
            if (context !== null && formFor === "users") {
                canValidate = context.canSubmit.usersForm;
            } else if (context !== null && formFor === "passwords") {
                canValidate = context.canSubmit.passwordsForm;
            }

            inputNode.push(
                <SimpleInput
                    id={inputs[i].inputId}
                    name={inputs[i].inputName}
                    placeholder={inputs[i].inputPlaceholder}
                    type={inputs[i].inputType}
                    canValidate={canValidate}
                    allows={inputs[i].inputAllows}
                    flexible={inputs[i].flexible}
                    valueFrom={inputs[i].inputValue}
                    key={i}
                />
            )
        }
        setSimpleInputs(inputNode);
    }, [context?.canSubmit]);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (context?.canSubmit) {
            context?.setCanSubmit({ usersForm: false, passwordsForm: false });
            if (formFor === "users") {
                context.setCanSubmit((prevProps) => ({ ...prevProps, usersForm: true }));
            } else {
                context.setCanSubmit((prevProps) => ({ ...prevProps, passwordsForm: true }));
            }
        }

        if (isFormValid()) {
            action();      
        }
    };

    return (
        <form className="w-full">
            <h1 className="mt-8 text-2xl font-semibold">{title}</h1>
            <div className="grid grid-cols-2 gap-4">
                {simpleInputs.map((element) => element)}
            </div>
            <ButtonDefault
                onClick={(event) => handleButtonClick(event)}
                label={submitButtonLabel}
                loadder={false}
                className="mt-8"
                defaultColor="bg-default-blue"
            />
        </form>
    );
}
