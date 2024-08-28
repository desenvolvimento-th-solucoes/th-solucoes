import React, { ReactNode, useState, useRef, useEffect } from "react";

type Props = {
    children: ReactNode;
    label?: string;
    icon?: React.ReactNode;
};

export const ComboBox = ({ children, label, icon }: Props) => {
    const [show, setShow] = useState(false);
    const comboBoxRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        setShow(!show);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (comboBoxRef.current) {
                const focusedElement = document.activeElement as HTMLElement;
                if (!comboBoxRef.current.contains(focusedElement)) {
                    setShow(false);
                }
            }
        }, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY) setShow(false);   
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <button
            className="flex flex-col px-4 items-center justify-center relative cursor-pointer h-full"
            onClick={handleClick}
            onBlur={handleBlur}
            tabIndex={0}
            ref={comboBoxRef}
        >
            <div className="flex gap-2 items-center text-md font-semibold">
                <h2 className="text-md">{ label }</h2>
                { icon }
            </div>
            {show && (
                <div className="flex gap-4 flex-col w-60 absolute top-[100%] right-0 shadow-gray-800 shadow-lg transition-all p-2 bg-default-black rounded-br-lg rounded-bl-lg">
                    { children }
                </div>
            )}
        </button>
    );
};
