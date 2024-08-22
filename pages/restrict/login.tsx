"use client";

import { useContext, useEffect, useState } from "react";
import { Input } from "../../src/app/components/Input";
import { Button } from "../../src/app/components/button";
import { ImEnter } from "react-icons/im";
import { Login } from "../../src/app/types/Login";
import { Warning } from "../../src/app/components/Warning";
import { AiFillWarning } from "react-icons/ai";
import { ModalType } from "../../src/app/types/ModalType";
import { Modal } from "../../src/app/components/Modal";
import { api } from "../../src/app/api/api";
import { ButtonDefault } from "../../src/app/components/button/ButtonDefault";
import { BsArrowRepeat, BsCheckLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AuthenticationContext } from "../../src/app/context/AuthenticationContext";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { InteractionButton } from '../../src/app/components/button/InteractionButton';
import { validator } from "../../src/app/features/validator";
import { useRouter } from "next/router";
import '../../src/app/globals.css';
import RestrictLayout from "@/layouts/Restrict";
import Link from "next/link";

const RestrictLogin = () => {
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });
    const [showWarning, setShowWarning] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filledOutCorrectly, setFilledOutCorrectly] = useState({ email: false, password: false });
    const [infoWarning, setInfoWarning] = useState<ModalType>({ show: false, title: "", message: "", contextButtonColor: "", contextBorderColor: "", icon: null });
    const [disable, setDisable] = useState(false); 
    const authenticationContext = useContext(AuthenticationContext);

    const handleInputChange = (inputName: "name" | "email" | "password" | "telephone", value: string) => {
        setInputValue((prevInput) => ({
            ...prevInput,
            [inputName]: value
        }));

        const newFilledOutCorrectly = { ...filledOutCorrectly };

        switch (inputName) {
            case "email":
                newFilledOutCorrectly.email = validator.validateEmail(value);
                break;
            case "password":
                newFilledOutCorrectly.password = !validator.validatePassword(value);
                break;
            default:
                break;
        }

        setFilledOutCorrectly(newFilledOutCorrectly);
    }

    useEffect(() => {
        const newErrors: Login = {
            email: "",
            password: ""
        };

        if (inputValue.email) {
            if (validator.validateEmail(inputValue.email)) {
                newErrors.email = "";
            } else if (!validator.validateEmail(inputValue.email)) {
                newErrors.email = "E-mail inválido";
            }
        }

        if (inputValue.password) {
            if (validator.validatePassword(inputValue.password)) {
                newErrors.password = "Mínimo 8 caracteres";
            } else if (!validator.validatePassword(inputValue.password)) {
                newErrors.password = "";
            }
        }

        setError(newErrors);
    }, [inputValue.email, inputValue.password]);

    const handleSubmit = async (entries: Login) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })

        const allFieldsFilledCorrectly =
            filledOutCorrectly.email &&
            filledOutCorrectly.password &&
            error.email === "" &&
            error.password === ""

        if (allFieldsFilledCorrectly) {
            let info = {};

            setLoading(true);
            setDisable(true);
            const response = await api.login({ email: entries.email, password: entries.password });
            await authenticationContext?.loginManager();

            if (response?.message === "Authentication has been successful.") {
                info = {
                    title: "Autenticação Realizada com Sucesso!",
                    message: "Seja bem-vindo(a) ao nosso informativo! Agora você já tem acesso a funcionalidades de especialidades, serviços e assistência.",
                    contextButtonColor: "bg-green-500",
                    contextBorderColor: "border-green-500",
                    icon: <BsCheckLg className="text-green-500 text-5xl box-content" />,
                    show: true,
                }
                setInfoWarning({ ...infoWarning, ...info });
            } else if (response?.response.status === 401) {
                info = {
                    title: "Inautorizado",
                    message: 'Oops, algo deu errado! Parece que suas credenciais estão incorretas ou você não está cadastrado no sistema. Que tal tentar novamente ou verificar se você já está registrado?',
                    contextButtonColor: "bg-red-500",
                    contextBorderColor: "border-red-500",
                    icon: <IoClose className="text-red-500 text-5xl box-content" />,
                    show: true,
                };
                setInfoWarning({ ...infoWarning, ...info });
            } else {
                info = {
                    title: "Inautorizado",
                    message: 'Desculpe, mas você não possui permissão para acessar o sistema informativo. Se você acredita que isso é um erro, entre em contato com o administrador do sistema para obter assistência.',
                    contextButtonColor: "bg-red-500",
                    contextBorderColor: "border-red-500",
                    icon: <IoClose className="text-red-500 text-5xl box-content" />,
                    show: true,
                };
            }

            setInfoWarning({ ...infoWarning, ...info });
            setLoading(false);
            setDisable(false);
        } else {
            if (showWarning) return;
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 4000);
        }
    }

    const navigate = useRouter();

    const closeModal = () => {
        setInfoWarning({ ...infoWarning, show: false });
        if (infoWarning.contextButtonColor === "bg-green-500") {
            navigate.push("/");
        }
    }

    return (
        <RestrictLayout>
            <main className="w-screen h-screen flex items-center justify-center bg-default-black">
                <InteractionButton
                    enable={true}
                    type={2}
                    onClick={() => navigate.push("/")}
                    icon={<AiOutlineArrowLeft className="text-white text-2xl" />}
                />
                <Warning
                    onClick={() => setShowWarning(!showWarning)}
                    message={"Preencha os campos corretamente!"}
                    show={showWarning}
                    icon={<AiFillWarning className="text-2xl" />}
                    contextColor="white"
                />
                <Modal
                    onClick={closeModal}
                    title={infoWarning.title}
                    message={infoWarning.message}
                    icon={infoWarning.icon}
                    show={infoWarning.show}
                    contextButtonColor={infoWarning.contextButtonColor}
                    contextBorderColor={infoWarning.contextBorderColor}
                />
                <section className="h-max w-full lg:w-max flex items-center justify-center gap-8 px-4">
                    <div className="mb-12 text-center text-white w-1/2 hidden lg:block">
                        <h1 className="text-5xl font-bold">TH Soluções</h1>
                        <p className="mt-4 leading-tight">Acesse sua conta para ver seu perfil, histórico e as páginas privativas que você tem acesso.</p>
                    </div>
                    <form action="" className="flex items-center flex-col justify-center w-full md:w-1/2">
                        <h1 className="w-full mb-8 text-xl text-white">Iniciar Sessão</h1>
                        <Input
                            disable={disable}
                            filled={filledOutCorrectly.email}
                            error={error.email}
                            value={inputValue.email}
                            marginBottom="mb-5"
                            type="email"
                            label="Email"
                            onChange={(event) => {
                                handleInputChange("email", event.target.value);
                            }}
                        />
                        <Input
                            disable={disable}
                            filled={filledOutCorrectly.password}
                            error={error.password}
                            value={inputValue.password}
                            marginBottom="mb-5"
                            type="password"
                            label="Senha"
                            onChange={(event) => {
                                handleInputChange("password", event.target.value);
                            }}
                        />
                        <div className="w-full flex flex-col-reverse items-center sm:flex-row sm:items-center sm:justify-between">
                            {!loading && (
                                <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-white"} label="Entrar" onClick={(event) => {
                                    event?.preventDefault();
                                    handleSubmit(inputValue);
                                }}>
                                    <Button.Icon backgroundColor="bg-default-blue" color="text-white" icon={<ImEnter className="absolute left-0 ml-3" />} />
                                </Button.Root>
                            )}
                            {loading && (
                                <ButtonDefault loadder={true} className="pointer-events-none" label="Aguarde..." icon={<BsArrowRepeat className="text-xl text-white" />} />
                            )}
                        </div>
                        {/* <p className="mt-4 text-white text-sm">
                            Ainda não é membro?
                            <Link onClick={() => navigate.push("/restrict/register")} href="/restrict/register" className="text-default-blue hover:underline font-bold ml-1">Registre-se.</Link>
                        </p> */}
                    </form>
                </section>
            </main>
        </RestrictLayout>
    )
}

export default RestrictLogin;