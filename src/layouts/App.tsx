"use client";

import { useEffect, useState, useCallback } from "react";
import { InteractionButton } from "../app/components/button/InteractionButton";
import { Master } from "../app/components/master";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineArrowLeft } from "react-icons/ai";
import { AuthenticationContext } from "../app/context/AuthenticationContext";
import { useContext } from "react";
import { useRouter } from "next/router";

type Props = {
    children: React.ReactNode;
    typeOfButtonInteraction?: 1 | 2;
}

function MainLayout({ children, typeOfButtonInteraction }: Props) {
    const [enableButton, setEnableButton] = useState({ top: true, bottom: false });
    const navigate = useRouter();
    const authenticationContext = useContext(AuthenticationContext);

    const handleTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    const handleBottom = useCallback(() => {
        window.scrollTo({
            top: 400,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                if (!enableButton.bottom) {
                    setEnableButton({ top: false, bottom: true });
                }
            } else {
                if (!enableButton.top) {
                    setEnableButton({ top: true, bottom: false });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [enableButton]);

    useEffect(() => {authenticationContext?.loginManager()}, []);
    const enableHeader = enableButton.bottom;

    return (
        <>
            {typeOfButtonInteraction === 1 && (
                <InteractionButton
                    type={2}
                    enable={enableButton.top}
                    onClick={handleBottom}
                    icon={<AiOutlineArrowDown className="text-white text-2xl" />}
                />
            )}
            {typeOfButtonInteraction === 2 && (
                <InteractionButton
                enable={true}
                type={2}
                onClick={() => navigate.push("/")}
                    icon={<AiOutlineArrowLeft className="text-white text-2xl" />}
                />
            )}
            <Master.Root>
                <Master.Main>
                    <Master.Header enable={enableHeader} />
                    <Master.Versatile>
                        { children }
                    </Master.Versatile>
                    <Master.Footer />
                </Master.Main>
                <InteractionButton
                    type={1}
                    enable={enableButton.bottom}
                    onClick={handleTop}
                    icon={<AiOutlineArrowUp className="text-white text-2xl" />}
                />
            </Master.Root>
        </>
    );
}

export default MainLayout;

