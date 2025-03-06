"use client";

import { useEffect, useState } from "react";
import { Input } from "@/app/components/Input";
import { TextArea } from "@/app/components/TextArea";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { Message } from "@/app/types/Message";
import { Button } from "@/app/components/button";
import { AiFillWarning, AiOutlineMessage } from "react-icons/ai";
import { features } from "@/app/features/features";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { PiPaperPlaneRight } from "react-icons/pi";
import { validator } from "@/app/features/validator";
import '../src/app/globals.css';
import MainLayout from "@/layouts/App";
import { api } from "@/app/api/api";
import { Warning } from "@/app/components/Warning";
import { Modal } from "@/app/components/Modal";
import { ModalType } from "@/app/types/ModalType";
import { IoWarning } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";

const Contact = () => {
    const [inputValue, setInputValue] = useState<Message>({ name: "", email: "", message: "" });
    const [error, setError] = useState<Message>({ name: "", email: "", message: "" });
    const [filledOutCorrectly, setFilledOutCorrectly] = useState({ name: false, email: false, message: false });
    const [warning, setWarning] = useState(false);
    const [loading, setLoading] = useState(false);
    const [infoWarning, setInfoWarning] = useState<ModalType>({ show: false, title: "", message: "", contextButtonColor: "", contextBorderColor: "", icon: null });
    const [disable, setDisable] = useState(false);

    const redirect = (target: string) => {
        window.open(target, "_blank")
    }

    const handleInputChange = (inputName: "name" | "email" | "message", value: string) => {
        setInputValue((prevInput) => ({
            ...prevInput,
            [inputName]: value
        }));

        const newFilledOutCorrectly = { ...filledOutCorrectly };

        switch (inputName) {
            case "name":
                newFilledOutCorrectly.name = validator.validateName(value) === -1;
                break;
            case "email":
                newFilledOutCorrectly.email = validator.validateEmail(value);
                break;
            case "message":
                newFilledOutCorrectly.message = !validator.validateMessage(value, 200);
                break;
            default:
                break;
        }

        setFilledOutCorrectly(newFilledOutCorrectly);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const allFieldsFilledCorrectly =
            filledOutCorrectly.name &&
            filledOutCorrectly.email &&
            filledOutCorrectly.message

        if (allFieldsFilledCorrectly) {
            setLoading(true);
            setDisable(true);
            try {
                const response = await api.contact(inputValue);
                setInfoWarning({
                    ...infoWarning,
                    show: true,
                    title: "Sucesso!",
                    message: `Logo mais estaremos entrando em contato com você, até mais!`,
                    contextButtonColor: "bg-green-500",
                    contextBorderColor: "border-green-500",
                    icon: <BsCheckLg className={`text-5xl text-green-500 box-content`} />
                });
            } catch (error) {
                setInfoWarning({
                    ...infoWarning,
                    show: true,
                    title: "Atenção",
                    message: `Limite de requisições excedido. Por favor, tente novamente mais tarde.`,
                    contextButtonColor: "bg-yellow-500",
                    contextBorderColor: "border-yellow-500",
                    icon: <IoWarning className={`text-5xl text-yellow-500 box-content`} />
                });
            } finally {
                setLoading(false);
                setDisable(false);
            }
        } else {
            if (warning) return;
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 4000);
        }
    }

    useEffect(() => {
        const newErrors: Message = {
            name: "",
            email: "",
            message: ""
        };

        if (inputValue.email !== "") {
            if (validator.validateEmail(inputValue.email)) {
                newErrors.email = "";
            } else if (!validator.validateEmail(inputValue.email)) {
                newErrors.email = "E-mail inválido";
            }
        }

        if (inputValue.name !== "") {
            switch (validator.validateName(inputValue.name)) {
                case 0:
                    newErrors.name = "Mínimo 2 caracteres";
                    break;
                case 1:
                    newErrors.name = "Não pode conter números";
                    break;
                case -1:
                    break;
            }
        }

        if (inputValue.message !== "") {
            if (validator.validateMessage(inputValue.message, 200)) {
                newErrors.message = "Limite de caracteres ultrapassado";
            } else {
                newErrors.message = "";
            }
        }

        if (inputValue.name !== "") {
            switch (validator.validateName(inputValue.name)) {
                case 0:
                    newErrors.name = "Mínimo 2 caracteres";
                    break;
                case 1:
                    newErrors.name = "Não pode conter números";
                    break;
                case -1:
                    break;
            }
        }

        setError(newErrors);
    }, [inputValue.email, inputValue.name, inputValue.name, inputValue.message])

    const closeModal = () => {
        setInfoWarning({ ...infoWarning, show: false });
    }

    return (
        <MainLayout typeOfButtonInteraction={1}>
            <Warning
                onClick={() => setWarning(false)}
                message={"Preencha os campos corretamente!"}
                show={warning}
                icon={<AiFillWarning className="text-2xl" />}
                contextColor="white"
            />
            <Modal
                onClick={() => closeModal()}
                title={infoWarning.title}
                message={infoWarning.message}
                icon={infoWarning.icon}
                show={infoWarning.show}
                contextButtonColor={infoWarning.contextButtonColor}
                contextBorderColor={infoWarning.contextBorderColor}
            />
            <main className="w-full h-full">
                <section className="w-screen h-screen bg-contact bg-no-repeat bg-cover bg-center">
                    <div className="bg-black/80 w-screen h-screen px-4 bottom-0 text-white flex flex-col justify-center items-center">
                        <div className="flex flex-col justify-center items-center lg:w-1/2">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-center">Seu contato é muito importante para nós!</h1>
                            <p className="text-sm sm:text-md md:text-lg font-extralight mb-6 text-center lg:text-lg">Nossa equipe está pronta para ouvir suas necessidades, desafios e metas. Não estamos apenas comprometidos em fornecer soluções, mas sim em encontrar as soluções ideais para o que você está procurando alcançar. Cada cliente é único para nós, e é por isso que adotamos uma abordagem personalizada para atender às suas demandas específicas.</p>
                            <Button.Root defaultTextColor="" label="Mande-nos uma mensagem" hoverTextColor="" onClick={() => features.handleScrollTo("#contact-area")}>
                                <Button.Icon color="" icon={<AiOutlineMessage className="absolute left-0 ml-3" />} backgroundColor="bg-default-blue" />
                            </Button.Root>
                        </div>
                    </div>
                </section>
                <section className="w-screen h-max py-12 px-4" id="contact-area">
                    <div className="container mx-auto text-2xl font-semibold text-default-blue w-full">Contate-nos</div>
                    <div className="container mx-auto flex flex-col gap-12 lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <div className="mb-12">
                                <h2 className="text-4xl font-bold">Como podemos te ajudar?</h2>
                            </div>

                            <form action="">
                                <div className="gap-12 flex-col xl:flex xl:flex-row">
                                    <Input
                                        disable={disable}
                                        error={error.name}
                                        filled={filledOutCorrectly.name}
                                        value={inputValue.name}
                                        type="text"
                                        marginBottom="mb-6"
                                        onChange={(event) => handleInputChange("name", event.target.value)}
                                        label="Nome" />
                                    <Input
                                        disable={disable}
                                        error={error.email}
                                        filled={filledOutCorrectly.email}
                                        value={inputValue.email}
                                        type="email"
                                        marginBottom="mb-6"
                                        onChange={(event) => handleInputChange("email", event.target.value)}
                                        label="Email" />
                                </div>
                                <TextArea
                                    disable={disable}
                                    filled={filledOutCorrectly.message}
                                    error={error.message}
                                    onChange={(event) => handleInputChange("message", event.target.value)}
                                    label="Mensagem"
                                />

                                <div className="w-full flex justify-end">
                                    <ButtonDefault
                                        loadder={loading}
                                        label="Enviar"
                                        onClick={(event) => {
                                            handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>);
                                        }}
                                        flexible={true} />
                                </div>
                            </form>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mb-12 flex flex-col items-center lg:items-start">
                                <h2 className="text-2xl font-bold mb-4 lg:text-4xl">Faça-nos uma visita.</h2>
                                <p className="text-md font-extralight text-center mb-6 lg:text-xl lg:text-left">Nossos clientes são importantes para nós. Ficaríamos contentes em receber a sua visita durante nosso horário comercial.</p>
                                <div className="flex items-center my-4 flex-col lg:flex-row">
                                    <div className="rounded-full w-10 h-10 box-border p-3 bg-sky-700 text-white flex items-center justify-center mr-0 mb-4 lg:mr-4 lg:mb-0">
                                        <FaLocationDot className="text-md w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-center lg:text-left">Rua Dr. Jose Alves, 313-B - Centro Mogi Mirim - São Paulo, 13800-050, Brazil</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 mb-10 flex-col lg:flex-row">
                                    <div className="rounded-full w-10 h-10 bg-sky-700 text-white flex items-center justify-center mr-0 mb-4 lg:mr-4 lg:mb-0">
                                        <BsTelephone className="text-xl" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-center lg:text-left">(19) 3019-2156</p>
                                        <p className="text-center lg:text-left">(19) 91000-5366</p>
                                    </div>
                                </div>
                                <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-black"} label="Envie uma mensagem" onClick={() => redirect("https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0")}>
                                    <Button.Icon backgroundColor="bg-green-700" color="text-white" icon={<FaWhatsapp className="absolute left-0 ml-3" />} />
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-screen h-max py-12">
                    <div className="container mx-auto flex flex-col">
                        <div className="w-full">
                            <h2 className="text-2xl font-bold mb-4 text-center lg:text-4xl">Nossa Localização</h2>
                            <p className="font-extralight text-md mb-6 text-center lg:text-xl">Nossos clientes são importantes para nós. Ficaríamos contentes em receber a sua visita durante nosso horário comercial.</p>
                            <div className="w-full flex justify-center">
                                <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-black"} label="Como chegar" onClick={() => redirect("https://www.google.com/maps?daddr=Rua+Dr.+Jose+Alves,+313-B+-+Centro++Mogi+Mirim+-+S%C3%A3o+Paulo,+13800-050,+Brazil")}>
                                    <Button.Icon backgroundColor="bg-default-blue" color="text-white" icon={<PiPaperPlaneRight className="absolute left-0 ml-3" />} />
                                </Button.Root>
                            </div>
                        </div>
                        <div className="w-full mt-8">
                            <img src="/assets/images/map.png" className="object-cover w-full h-full" alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Contact;
