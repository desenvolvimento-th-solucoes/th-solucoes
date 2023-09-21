import React, { useState } from "react";

type Props = {
    label: string;
    marginBottom?: string;
    type: string;
    value: string;
    error: string;
    filled: boolean;
    disable: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ label, onChange, marginBottom, type, value, error, filled, disable }: Props) => {
    const [interact, setInteraction] = useState(value !== "");
    const handleFocus = () => setInteraction(true);
    const handleBlur = () => setInteraction(value !== "");

    const filledClass = filled ? "bg-green-200 border-green-300 appearance-none" : "";
    const errorClass = error ? "bg-red-200 border-red-300 appearance-none" : "";

    return (
        <>
            <div className={`relative w-full rounded-xl ${marginBottom}`}>
                <p className={`absolute left-0 w-full h-full pointer-events-none transition-all font-semibold py-2 px-10 
                ${interact || value ? "bottom-8 text-default-blue text-sm px-5 border-default-blue" : "bottom-0 text-gray-500 text-md"}
                `}>
                    {label}
                </p>
                <input
                    disabled={disable}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    type={type}
                    autoComplete="nope"
                    className={`
                    ${filledClass}
                    ${errorClass}
                    text-md w-full outline-none border-b-1 text-black bg-gray-200 border-gray-300 appearance-none
                    px-5 py-2 rounded-xl border-2 ${filledClass === "" && errorClass === "" && "focus:border-default-blue"}`}
                />
                <div className={`mt-1 text-right text-red-500 opacity-0 ${error !== "" ? "opacity-100" : ""}`}>
                    {error === "" ? "." : error}
                </div>
            </div>
        </>
    );
}
