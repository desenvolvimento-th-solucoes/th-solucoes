import { useEffect, useState } from "react";
import { validator } from "../features/validator";

type Props = {
    id: string;
    valueFrom?: string;
    canValidate: boolean;
    name: string;
    type: string;
    allows: string;
    placeholder: string;
    flexible?: boolean;
}

type InputProperty = {
    value: string;
    errorMessage: string;
}

export const SimpleInput = ({ valueFrom, id, flexible, canValidate, allows, name, type, placeholder }: Props) => {
    const [inputProperties, setInputProperties] = useState<InputProperty>({ value: "", errorMessage: "" });

    useEffect(() => {
        let regex;
        if (canValidate) {
            if (inputProperties.value === "") {
                setInputProperties((prevProps) => ({...prevProps, errorMessage: "Preencha o campo corretamente!"}))
                return;
            }

            switch(allows) {
                case "email":
                    regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!regex.test(inputProperties.value)) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Informe um endereço de e-mail válido!"}))
                        return;
                    }
                break;
                case "ip":
                    regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
                    if (!regex.test(inputProperties.value)) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Informe um endereço de IP válido!"}))
                        return;
                    }
                break;
                case "telephone":
                    if (validator.validateTelephone(inputProperties.value)) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Informe um telefone válido!"}))
                        return;
                    }
                break;
                case "name":
                    if (inputProperties.value.length < 5) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Nome inválido!"}))
                        return;
                    }
                break;
                case "text": 
                    if (inputProperties.value.length < 10) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Descrição incompleta!"}))
                        return;
                    }
                break;
                case "password": 
                    if (inputProperties.value.length < 8) {
                        setInputProperties((prevProps) => ({...prevProps, errorMessage: "Mínimo 8 caracteres!"}))
                        return;
                    }
                break;
            }
            setInputProperties((prevProps) => ({...prevProps, errorMessage: ""}));
        }
    }, [canValidate, inputProperties.value]);

    return (
        <label className={`flex flex-col my-2 ${flexible && "col-span-3"}`}>
            {name}
            <input 
                autoComplete="" 
                id={id} 
                onChange={
                    (event) => setInputProperties((prevProps) => (
                        {
                            ...prevProps, 
                            value: event.target.value
                        }
                    ))} 
                value={valueFrom !== "" ? valueFrom : inputProperties.value} 
                className={`
                ${flexible && "col-span-3"} 
                ${inputProperties.errorMessage !== "" && "border-red-600"}
                py-2 px-4 outline-none border focus:border-default-blue`} 
                type={type} 
                placeholder={placeholder} 
            />
            {inputProperties.errorMessage !== "" && (
                <span className="text-red-600 font-md">{inputProperties.errorMessage}</span>
            )}
        </label>
    )
}