"use client";

import { FaPlus } from "react-icons/fa";
import { Button } from "@/app/components/button";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { Input } from "@/app/components/Input";
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/app/components/TypingAnimation";
import { validator } from "@/app/features/validator";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import MainLayout from "@/app/App";

const Index = () => {
    const [error, setError] = useState("");
    const [emailNewsletter, setEmailNewsletter] = useState("");
    const [filledOutCorrectly, setFilledOutCorrectly] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleInputChange = (value: string) => {
        setEmailNewsletter(value);
        setFilledOutCorrectly(validator.validateEmail(value));
    }

    const navigate = useRouter();

    const handleSubmit = (input: string) => {
        setDisable(true);
    }

    useEffect(() => {
        if (emailNewsletter !== "") {
            if (validator.validateEmail(emailNewsletter)) {
                setError("");
            } else {
                setError("E-mail inválido")
            }
        }
    }, [emailNewsletter]);

    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full">
                <section className="h-screen flex items-center bg-default-blue bg-cover px-4 bg-none lg:bg-default lg:bg-left">
                    <div className="container mx-auto">
                        <div className="w-full h-max flex items-center text-white">
                            <div className="h-full w-1 bg-default-blue"></div>
                            <div className="relative">
                                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl justify-center font-bold leading-normal lg:justify-start flex items-center">TH Soluções: <TypingAnimation /></h1>
                                <p className="text-sm sm:text-md md:text-lg text-center bg-black/75 p-2 rounded-lg font-extralight">Soluções altamente eficientes em Tecnologia da Informação para impulsionar a produtividade e o desempenho de sua empresa.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="h-max">
                    <div className="container mx-auto flex items-center justify-center gap-8 py-12 px-4">
                        <div className="w-full">
                            <h2 className="text-3xl font-bold mb-4 text-center">Seja bem-vindo(a) a TH Soluções</h2>
                            <p className="text-md mb-8 text-center">Nossa empresa possui uma extensa trajetória no campo da tecnologia, dispondo de uma equipe de especialistas qualificados e certificados. Nosso objetivo é potencializar a competitividade e lucratividade da sua empresa por meio da diminuição de despesas e do aumento da eficiência, utilizando as mais avançadas ferramentas na oferta de serviços de tecnologia da informação e na disponibilização de equipamentos de informática perfeitamente adequados ao seu setor de atuação.</p>
                            <div className="w-full flex justify-center">
                                <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-black"} label="Saiba mais" onClick={() => navigate.push("/about")}>
                                    <Button.Icon backgroundColor="bg-default-blue" color="text-white" icon={<FaPlus className="absolute left-0 ml-3" />} />
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="h-max w-screen bg-default-black text-white py-12 px-4">
                    <div className="container mx-auto flex flex-col items-center w-full">
                        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
                        <p className="mb-12 text-md text-center">Inscreva-se para receber novidades sobre ofertas especiais, promoções e eventos.</p>
                        <form className="flex flex-col items-center gap-8 w-full justify-center lg:w-1/3">
                            <Input
                                disable={disable}
                                error={error}
                                filled={filledOutCorrectly}
                                value={emailNewsletter}
                                type="email"
                                label="Email"
                                onChange={(event) => handleInputChange(event.target.value)}
                            />
                            <ButtonDefault loadder={false} icon={<BsFillPlusCircleFill />} label="Inscrever-se" onClick={(event) => {
                                event?.preventDefault();
                                handleSubmit(emailNewsletter);
                            }} />
                        </form>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Index;