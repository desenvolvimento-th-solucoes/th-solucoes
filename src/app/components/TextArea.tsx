import React, { useState } from "react";

type Props = {
    label: string;
    error: string;
    filled: boolean; 
    disable: boolean;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ label, onChange, error, filled, disable }: Props) => {
    const [interact, setInteraction] = useState(false);
    const [value, setValue] = useState("");

    const filledClass = filled ? "bg-green-200 border-green-300 appearance-none" : "";
    const errorClass = error ? "bg-red-200 border-red-300 appearance-none" : "";

    const handleFocus = () => {
        setInteraction(true);
    }

    const handleBlur = () => {
        setInteraction(value !== "");
    }

    return (
        <div className="relative w-full rounded-xl mb-12">
            <p className={`absolute left-0 w-full h-full pointer-events-none transition-all font-semibold py-2 px-10 ${interact || value ? "bottom-8 text-default-blue text-sm px-5 border-default-blue" : "bottom-0 text-gray-500 text-md"}`}>{ label }</p>
            <textarea 
                disabled={disable}
                maxLength={200}
                autoComplete="nope"
                onChange={(event) => {
                    setValue(event.target.value);
                    onChange(event);
                }} 
                onFocus={handleFocus} 
                onBlur={handleBlur} 
                className={`${filledClass} ${errorClass} appearance-none text-lg w-full h-40 resize-none outline-none border-b-1 text-black ${filledClass === "" && errorClass === "" && "focus:border-default-blue"} bg-gray-200 border-gray-300 px-4 py-2 rounded-xl border-2`}
            />
        
            <div className={`flex items-center justify-between w-full ${error !== "" ? "opacity-100" : ""}`}>
                <p className="mt-1 text-right text-red-500 opacity-0">{error === "" ? "." : error}</p>
                <p>{value.length ?? 0}/200</p>
            </div>
        </div>
    )
}
