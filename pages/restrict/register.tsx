"use client";

import { useEffect, useState } from "react";
import { Input } from "../../src/app/components/Input";
import { Button } from "../../src/app/components/button";
import { ImEnter } from "react-icons/im";
import { Warning } from "../../src/app/components/Warning";
import { AiFillWarning } from "react-icons/ai";
import { Register } from "../../src/app/types/Register";
import { FiArrowRight } from "react-icons/fi";
import { validator } from "../../src/app/features/validator";
import { api } from "../../src/app/api/api";
import { BsArrowRepeat } from "react-icons/bs";
import { ButtonDefault } from "../../src/app/components/button/ButtonDefault";
import { Modal } from "../../src/app/components/Modal";
import { BsCheckLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";
import axios, { AxiosError } from "axios";
import { ModalType } from "../../src/app/types/ModalType";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { InteractionButton } from '../../src/app/components/button/InteractionButton';
import { useRouter } from "next/router";
import '../../src/app/globals.css';
import RestrictLayout from "@/layouts/Restrict";
import Link from "next/link";

const RestrictRegister = () => {
    const [inputValue, setInputValue] = useState<Register>({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        telephone: ""
    });

    const [error, setError] = useState<Register>({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        telephone: ""
    });

    const [filledOutCorrectly, setFilledOutCorrectly] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false,
        telephone: false
    });

    const [warning, setWarning] = useState({ tw: false, fw: false });
    const [infoWarning, setInfoWarning] = useState<ModalType>({ show: false, title: "", message: "", contextButtonColor: "", contextBorderColor: "", icon: null });
    const [currentStep, setCurrentStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);

    const navigate = useRouter();

    const steps = [
        [
            {
                error: error.name,
                filledOutCorrectly: filledOutCorrectly.name,
                value: inputValue.name,
                label: "Nome",
                type: "text",
                change: "name"
            },
            {
                error: error.lastName,
                filledOutCorrectly: filledOutCorrectly.lastName,
                value: inputValue.lastName,
                label: "Sobrenome",
                type: "text",
                change: "lastName"
            },
        ],
        [
            {
                error: error.email,
                filledOutCorrectly: filledOutCorrectly.email,
                value: inputValue.email,
                label: "Email",
                type: "email",
                change: "email"
            },
            {
                error: error.telephone,
                filledOutCorrectly: filledOutCorrectly.telephone,
                value: inputValue.telephone,
                label: "Telefone",
                type: "tel",
                change: "telephone"
            },
        ],
        [
            {
                error: error.password,
                filledOutCorrectly: filledOutCorrectly.password,
                value: inputValue.password,
                label: "Senha",
                type: "password",
                change: "password"
            },
            {
                error: error.confirmPassword,
                filledOutCorrectly: filledOutCorrectly.confirmPassword,
                value: inputValue.confirmPassword,
                label: "Confirme a senha",
                type: "password",
                change: "confirmPassword"
            }
        ]
    ]

    const handleInputChange = (inputName: string, value: string) => {
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
            case "name":
                newFilledOutCorrectly.name = validator.validateName(value) === -1;
                break;
            case "lastName":
                newFilledOutCorrectly.lastName = validator.validateLastName(value) === -1;
                break;
            case "telephone":
                newFilledOutCorrectly.telephone = !validator.validateTelephone(value) || value === "";
                break;
            case "confirmPassword":
                newFilledOutCorrectly.confirmPassword = (value === inputValue.password);
                break;
            default:
                break;
        }

        setFilledOutCorrectly(newFilledOutCorrectly);
    }

    const handleSubmit = async (entries: Register) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        const allFieldsFilledCorrectly =
            filledOutCorrectly.name &&
            filledOutCorrectly.lastName &&
            filledOutCorrectly.email &&
            filledOutCorrectly.password &&
            filledOutCorrectly.confirmPassword &&
            filledOutCorrectly.telephone

        if (allFieldsFilledCorrectly) {
            setInputValue({
                name: entries.name.trim(),
                lastName: entries.lastName.trim(),
                email: entries.email.trim(),
                telephone: entries.telephone.trim(),
                password: entries.password.trim(),
                confirmPassword: entries.confirmPassword.trim()
            });
            try {
                setLoading(true);
                setDisable(true);
                const response = await api.register(inputValue);
                let info = {};

                if (response !== undefined) {
                    if (response.code === 201) {
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Sucesso!",
                            message:
                                "Agora, para ter acesso a todas as funcionalidades desta plataforma, você será redirecionado para o login.",
                            contextBorderColor: "border-green-500",
                            contextButtonColor: "bg-green-500",
                            icon: <BsCheckLg className="text-green-500 text-5xl box-content" />
                        });
                    } else if (response.message === "The email has already been taken.") {
                        info = {
                            title: "Atenção!",
                            message:
                                'O e-mail informado já está em uso.',
                            contextButtonColor: "bg-yellow-500",
                            contextBorderColor: "border-yellow-500",
                            icon: <IoWarning className="text-yellow-500 text-5xl box-content" />
                        };
                        setInfoWarning({
                            ...infoWarning,
                            ...info,
                            show: true,
                        });
                    } else {
                        info = {
                            title: "Algo deu errado!",
                            message: "Não conseguimos realizar o seu cadastro. Tente novamente daqui alguns minutos.",
                            contextButtonColor: "bg-red-500",
                            contextBorderColor: "border-red-500",
                            icon: <IoClose className="text-red-500 text-5xl border-4 border-red-500 box-content" />
                        };
                        setInfoWarning({
                        ...infoWarning,
                        ...info,
                        show: true,
                    });
                    }
                    
                } else {
                    setInfoWarning({
                        ...infoWarning,
                        show: true,
                        title: "Algo deu errado!",
                        message:
                            "Por favor, verifique se você já está registrado na plataforma. Se necessário, utilize um outro endereço de e-mail e/ou telefone.",
                        contextBorderColor: "border-red-500",
                        contextButtonColor: "bg-red-500",
                        icon: <IoClose className="text-red-500 text-5xl box-content" />
                    });
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;
                    console.error('AxiosError:', axiosError);

                    setInfoWarning({
                        ...infoWarning,
                        title: "Erro na solicitação",
                        message: `Ocorreu um erro na solicitação. Código de status: ${axiosError.response?.status}`,
                        contextButtonColor: "bg-red-500",
                        contextBorderColor: "border-red-500",
                        icon: <IoClose className={`text-5xl text-red-500`} />
                    });
                } else {
                    console.error('Unexpected error:', error);
                }
            } finally {
                setLoading(false);
                setDisable(false);
            }
        } else {
            if (warning.fw) return;
            setWarning({ ...warning, fw: true });
            setTimeout(() => {
                setWarning({ ...warning, fw: false });
            }, 4000);
        }
    }

    useEffect(() => {
        const newErrors: Register = {
            name: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            telephone: ""
        };

        if (inputValue.email !== "") {
            if (validator.validateEmail(inputValue.email)) {
                newErrors.email = "";
            } else if (!validator.validateEmail(inputValue.email)) {
                newErrors.email = "E-mail inválido";
            }
        }

        if (inputValue.password !== "") {
            if (validator.validatePassword(inputValue.password)) {
                newErrors.password = "Mínimo 8 caracteres";
            } else if (!validator.validatePassword(inputValue.password)) {
                newErrors.password = "";
            }
        }

        if (inputValue.telephone !== "") {
            if (validator.validateTelephone(inputValue.telephone)) {
                newErrors.telephone = "Número de telefone inválido!";
            } else {
                newErrors.telephone = "";
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

        if (inputValue.lastName !== "") {
            switch (validator.validateLastName(inputValue.lastName)) {
                case 0:
                    newErrors.lastName = "Informe um sobrenome válido";
                    break;
                case 1:
                    newErrors.lastName = "Não pode conter números";
                    break;
                case -1:
                    break;
            }
        }

        if (inputValue.confirmPassword !== "") {
            if (inputValue.password === inputValue.confirmPassword) {
                newErrors.confirmPassword = "";
            } else {
                newErrors.confirmPassword = "As senhas não coincidem";
            }
        }

        if (inputValue.confirmPassword !== "" && inputValue.password !== "") {
            setFilledOutCorrectly({
                ...filledOutCorrectly,
                password: !validator.validatePassword(inputValue.password ?? "") && inputValue.password !== "",
                confirmPassword: (inputValue.confirmPassword === inputValue.password) && inputValue.confirmPassword !== ""
            });
        }

        setError(newErrors);
    }, [filledOutCorrectly, inputValue]);


    const handleNext = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });

        let isValid = steps[currentStep].every(element => {
            return element.filledOutCorrectly ? true : false;
        });


        if (isValid) {
            if (currentStep < steps.length) {
                setCurrentStep(currentStep + 1);
            }
        } else {
            if (warning.fw) return;
            setWarning({ ...warning, fw: true });
            setTimeout(() => {
                setWarning({ ...warning, fw: false });
            }, 4000);
        }
    }

    const closeModal = () => {
        setInfoWarning({ ...infoWarning, show: false });
        if (infoWarning.contextButtonColor === "bg-green-500") {
            navigate.push("/restrict/login");
        }
    }

    let title = "";

    switch (currentStep) {
        case 0:
            title = "Informe seus dados de identificação";
            break;
        case 1:
            title = "Agora, suas informações de contato"
            break;
        case 2:
            title = "Por fim, crie a sua senha";
            break;
    }

    return (
        <RestrictLayout>
            <main className="w-screen min-h-screen flex items-center justify-center bg-default-black">
                <InteractionButton
                    enable={true}
                    type={2}
                    onClick={() => navigate.push("/")}
                    icon={<AiOutlineArrowLeft className="text-white text-2xl" />}
                />
                <Warning
                    onClick={() => setWarning({ ...warning, fw: false })}
                    message={"Preencha os campos corretamente!"}
                    show={warning.fw}
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
                    <form className="flex items-center flex-col justify-center w-full lg:w-1/2">
                        <h1 className="text-3xl w-full text-left font-bold mb-1 text-white">Cadastro</h1>
                        <div className="flex items-center justify-between w-full mb-8">
                            <h2 className="w-full text-md text-white font-extralight lg:text-lg">{title}</h2>
                            {currentStep > 0 &&
                                <button className={`text-white mr-4 cursor-pointer ${loading && "hidden"}`} onClick={(e) => {
                                    event?.preventDefault();
                                    setCurrentStep(currentStep > 0 ? currentStep - 1 : 0);
                                }}>Voltar</button>
                            }
                        </div>
                        {steps[currentStep].map((element, index) => {
                            return (
                                <Input
                                    key={index}
                                    disable={disable}
                                    filled={element.filledOutCorrectly}
                                    error={element.error}
                                    value={element.value}
                                    marginBottom="mb-5"
                                    type={element.type}
                                    label={element.label}
                                    onChange={(event) => {
                                        handleInputChange(element.change, event.target.value);
                                    }}
                                />
                            )
                        })}
                        {currentStep + 1 < steps.length ?
                            (
                                <div className="w-full flex items-center justify-between flex-col-reverse lg:flex-row">
                                    <p className=" text-white mt-6 lg:mb-0">
                                        Já possui uma conta?
                                        <Link onClick={() => navigate.push("/restrict/login")} href="/restrict/login" className="text-default-blue hover:underline font-bold ml-1">Entre.</Link>
                                    </p>
                                    <div className="flex items-center">
                                        <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-white"} label="Próximo" onClick={(event) => {
                                            event?.preventDefault();
                                            handleNext();
                                        }}>
                                            <Button.Icon backgroundColor="bg-default-blue" color="text-white" icon={<FiArrowRight className="absolute left-0 ml-3" />} />
                                        </Button.Root>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div className="w-full flex items-center justify-between flex-col-reverse lg:flex-row">
                                    <p className=" text-white mt-6  lg:mb-0">
                                        Já possui uma conta?
                                        <Link onClick={() => navigate.push("/restrict/login")} href="/restrict/login" className="text-default-blue hover:underline font-bold ml-1">Entre.</Link>
                                    </p>
                                    {!loading && (
                                        <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-white"} label="Registrar" onClick={(event) => {
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
                            )
                        }
                    </form>
                </section>
            </main>
        </RestrictLayout>
    )
}

export default RestrictRegister;