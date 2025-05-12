"use client";

import MainLayout from "@/layouts/App";
import { api } from "@/app/axios/api";
import { Input } from "@/app/components/Input";
import { RequireAuthentication } from "@/app/components/RequireAuthentication";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { validator } from "@/app/features/validator";
import { ModalType } from "@/app/types/ModalType";
import axios, { AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import { LuMove3D, LuSave } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";
import { IoClose, IoWarning } from "react-icons/io5";
import { AuthenticationContext } from "@/app/context/AuthenticationContext";
import { features } from "@/app/features/features";
import { useRouter } from "next/navigation";
import { Save } from "@/app/types/Save";
import { Modal } from "@/app/components/Modal";
import { Warning } from "@/app/components/Warning";
import { AiFillWarning } from "react-icons/ai";
import { PiGearSixBold } from "react-icons/pi";
import { FiAlertTriangle } from "react-icons/fi";

const Account = () => {
    const [error, setError] = useState<Save>({
        name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        telephone: ""
    });

    const [filledOutCorrectly, setFilledOutCorrectly] = useState({
        name: false,
        last_name: false,
        email: false,
        password: false,
        confirmPassword: false,
        telephone: false
    });

    const [disable, setDisable] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [warning, setWarning] = useState(false);
    const [loading, setLoading] = useState(false);
    const [infoWarning, setInfoWarning] = useState<ModalType>({ show: false, title: "", message: "", contextButtonColor: "", contextBorderColor: "", icon: null });
    const [loadingPassword, setLoadingPassword] = useState(false);

    const authenticationContext = useContext(AuthenticationContext);

    const [inputValue, setInputValue] = useState<Save>({
        name: "",
        last_name: "",
        email: "",
        telephone: "",
        password: "",
        confirmPassword: ""
    });

    useEffect(() => {
        navigate.push("/");
    }, []);

    const handleInputChange = (inputName: "name" | "last_name" | "email" | "password" | "confirmPassword" | "telephone", value: string) => {
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
                newFilledOutCorrectly.password = !validator.validatePassword(value) && value !== "";
                break;
            case "name":
                newFilledOutCorrectly.name = validator.validateName(value) === -1;
                break;
            case "last_name":
                newFilledOutCorrectly.last_name = validator.validateLastName(value) === -1;
                break;
            case "telephone":
                newFilledOutCorrectly.telephone = !validator.validateTelephone(value) || value === "";
                break;
            case "confirmPassword":
                newFilledOutCorrectly.confirmPassword = (value === inputValue.password) && value !== "";
                break;
            default:
                break;
        }
        setFilledOutCorrectly(newFilledOutCorrectly);
    }

    const handleSubmit = async (entries: Save) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        const allFieldsFilledCorrectly =
            filledOutCorrectly.name &&
            filledOutCorrectly.last_name &&
            filledOutCorrectly.email &&
            filledOutCorrectly.telephone
        if (allFieldsFilledCorrectly) {
            setInputValue({
                ...inputValue,
                name: entries.name?.trim() ?? "",
                last_name: entries.last_name?.trim() ?? "",
                email: entries.email?.trim() ?? "",
                telephone: entries.telephone?.trim() ?? "",
            });

            try {
                setLoading(true);
                setDisable(true);
                if (authenticationContext?.localStorageData.loggedUser?.id) {
                    const response = await api.save(authenticationContext?.localStorageData.loggedUser.id, {
                        name: inputValue.name,
                        last_name: inputValue.last_name,
                        email: inputValue.email,
                        telephone: inputValue.telephone
                    });
                    setInfoWarning({ ...infoWarning, show: true });

                    if (response.message === "User successfully updated") {
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Sucesso!",
                            message:
                                "As informações foram atualizadas com sucesso.",
                            contextBorderColor: "border-green-500",
                            contextButtonColor: "bg-green-500",
                            icon: <BsCheckLg className="text-green-500 text-5xl box-content" />
                        });
                    } else if (response.message === "Nothing to update") {
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Atenção",
                            message: `Não há nenhuma informação para atualizar.`,
                            contextButtonColor: "bg-yellow-500",
                            contextBorderColor: "border-yellow-500",
                            icon: <IoWarning className={`text-5xl text-yellow-500 box-content`} />
                        });
                    }
                } else {
                    setInfoWarning({
                        ...infoWarning,
                        title: "Erro na solicitação",
                        message: `Não foi possível atualizar suas informações.`,
                        contextButtonColor: "bg-red-500",
                        contextBorderColor: "border-red-500",
                        icon: <IoClose className={`text-5xl text-red-500 box-content`} />
                    });
                }
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    const axiosError = error as AxiosError;

                    setInfoWarning({
                        ...infoWarning,
                        show: true,
                        title: "Erro na solicitação",
                        message: `Ocorreu um erro na solicitação. Código de status: ${axiosError.response?.status}`,
                        contextButtonColor: "bg-red-500",
                        contextBorderColor: "border-red-500",
                        icon: <IoClose className={`text-5xl text-red-500 box-content`} />
                    });
                } else {
                    setInfoWarning({
                        ...infoWarning,
                        show: true,
                        title: "Erro na solicitação",
                        message: `Ocorreu um erro na solicitação.`,
                        contextButtonColor: "bg-red-500",
                        contextBorderColor: "border-red-500",
                        icon: <IoClose className={`text-5xl text-red-500 box-content`} />
                    });
                }
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
        const newErrors = {
            name: "",
            last_name: "",
            email: "",
            telephone: ""
        };

        if (inputValue.email) {
            if (validator.validateEmail(inputValue.email)) {
                newErrors.email = "";
            } else if (!validator.validateEmail(inputValue.email)) {
                newErrors.email = "E-mail inválido";
            }
        }

        if (inputValue.telephone) {
            if (validator.validateTelephone(inputValue.telephone)) {
                newErrors.telephone = "Número de telefone inválido!";
            } else {
                newErrors.telephone = "";
            }
        }

        if (inputValue.name) {
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

        if (inputValue.last_name) {
            switch (validator.validateLastName(inputValue.last_name)) {
                case 0:
                    newErrors.last_name = "Informe um sobrenome válido";
                    break;
                case 1:
                    newErrors.last_name = "Não pode conter números";
                    break;
                case -1:
                    break;
            }
        }

        setError({
            ...error,
            name: newErrors.name,
            email: newErrors.email,
            last_name: newErrors.last_name,
            telephone: newErrors.telephone,
        });
    }, [inputValue.email, inputValue.name, inputValue.last_name, inputValue.telephone]);

    useEffect(() => {
        const newErrors = {
            password: "",
            confirmPassword: ""
        }

        if (inputValue.password !== "" && inputValue.password) {
            if (validator.validatePassword(inputValue.password)) {
                newErrors.password = "Mínimo 8 caracteres";
            } else if (!validator.validatePassword(inputValue.password)) {
                newErrors.password = "";
            }
        }

        if (inputValue.confirmPassword !== "" && inputValue.confirmPassword) {
            if (inputValue.password === inputValue.confirmPassword) {
                newErrors.confirmPassword = "";
            } else {
                newErrors.confirmPassword = "As senhas não coincidem";
            }
        }
        setError({
            ...error,
            password: newErrors.password,
            confirmPassword: newErrors.confirmPassword
        });

        if (inputValue.confirmPassword !== "" && inputValue.password !== "") {
            setFilledOutCorrectly({
                ...filledOutCorrectly,
                password: !validator.validatePassword(inputValue.password ?? "") && inputValue.password !== "",
                confirmPassword: (inputValue.confirmPassword === inputValue.password) && inputValue.confirmPassword !== ""
            });
        }
    }, [inputValue.password, inputValue.confirmPassword]);

    const closeModal = () => {
        setShowModal(false);
        setInfoWarning({ ...infoWarning, show: false });
    }
    const navigate = useRouter();

    useEffect(() => {
        const localStorageData = localStorage.getItem("logged_user");

        if (localStorageData) {
            const data = JSON.parse(localStorageData);
            setInputValue({
                name: data.logged_user.name,
                last_name: data.logged_user.last_name,
                email: data.logged_user.email,
                telephone: data.logged_user.telephone,
                password: "",
                confirmPassword: ""
            });

            setFilledOutCorrectly({
                ...filledOutCorrectly,
                name: validator.validateName(data.logged_user.name) === -1,
                last_name: validator.validateLastName(data.logged_user.last_name) === -1,
                email: validator.validateEmail(data.logged_user.email),
                telephone: !validator.validateTelephone(data.logged_user.telephone) || data.logged_user.telephone === "",
            });
        }
    }, []);

    const handleRedefine = async (password: string) => {
        const allFieldsFilledCorrectly =
            filledOutCorrectly.password && filledOutCorrectly.confirmPassword

        if (allFieldsFilledCorrectly && password !== "") {
            if (authenticationContext?.localStorageData.loggedUser?.id) {
                try {
                    setDisable(true);
                    setLoadingPassword(true);
                    const response = await api.redefine(authenticationContext?.localStorageData.loggedUser.id, password);
                    if (response.message === "Password redefined successfully") {
                        await api.destroy();
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Tudo certo!",
                            message: "Estamos lhe redirecionando...",
                            contextButtonColor: "bg-blue-500",
                            contextBorderColor: "border-blue-500",
                            icon: <LuMove3D className={`text-5xl text-blue-500 box-content`} />
                        });
                        navigate.push("/restrict/login")
                    } else if (response.message === "The password is the same") {
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Atenção",
                            message: `A senha informada não pode ser a mesma!`,
                            contextButtonColor: "bg-yellow-500",
                            contextBorderColor: "border-yellow-500",
                            icon: <IoWarning className={`text-5xl text-yellow-500 box-content`} />
                        });
                    } else {
                        setInfoWarning({
                            ...infoWarning,
                            show: true,
                            title: "Erro na solicitação",
                            message: `Ocorreu um erro na solicitação.`,
                            contextButtonColor: "bg-red-500",
                            contextBorderColor: "border-red-500",
                            icon: <IoClose className={`text-5xl text-red-500 box-content`} />
                        });
                    }
                } catch (error) {
                    setInfoWarning({
                        ...infoWarning,
                        show: true,
                        title: "Erro na solicitação",
                        message: `Ocorreu um erro na solicitação. Com o erro: ${error}`,
                        contextButtonColor: "bg-red-500",
                        contextBorderColor: "border-red-500",
                        icon: <IoClose className={`text-5xl text-red-500 box-content`} />
                    });
                } finally {
                    setLoadingPassword(false);
                    setDisable(false);
                }
            }
        } else {
            if (warning) return;
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 4000);
        }
    }

    return (
        <MainLayout typeOfButtonInteraction={2}>
            <RequireAuthentication authenticationContext={authenticationContext}>
                <Warning
                    onClick={() => setWarning(false)}
                    message={"Preencha os campos corretamente!"}
                    show={warning}
                    icon={<AiFillWarning className="text-2xl" />}
                    contextColor="yellow-500"
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
                    <section className="px-4">
                        <div className="container mx-auto h-max py-12 flex flex-col gap-8 bg-white rounded-lg">
                            <div className="text-left">
                                <h2 className="text-2xl font-bold mb-2 lg:text-4xl">Dados da sua Conta</h2>
                                <p className="text-md font-extralight lg:text-xl">Mantenha as suas informações pessoais atualizadas, assim podemos te dar assistência quando necessário.</p>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-2 lg:text-2xl">Suas Informações</h2>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div className="col-span-3 md:col-span-1 flex flex-col items-center">
                                    <img src="/assets/images/th-solucoes-logo2.png" className="rounded-full w-48 h-48 cursor-pointer" alt="" />
                                    <h2 className="text-2xl font-semibold mt-4 mb-6">{features.toCapitalize(inputValue.name ?? "")} {features.toCapitalize(inputValue.last_name ?? "")}</h2>
                                </div>
                                <form action="" className="flex flex-col col-span-1 md:col-span-2">
                                    <div className="gap-x-14">
                                        <fieldset className="flex flex-col justify-center md:items-center md:flex-row gap-4">
                                            <legend className="mb-7 text-2xl font-semibold whitespace-nowrap">Dados Pessoais</legend>
                                            <Input
                                                disable={disable}
                                                label={"Nome"}
                                                type={"text"}
                                                value={inputValue.name ?? ""}
                                                error={error.name ?? ""}
                                                filled={filledOutCorrectly.name}
                                                onChange={(event) => handleInputChange("name", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                            <Input
                                                disable={disable}
                                                label={"Sobrenome"}
                                                type={"text"}
                                                value={inputValue.last_name ?? ""}
                                                error={error.last_name ?? ""}
                                                filled={filledOutCorrectly.last_name}
                                                onChange={(event) => handleInputChange("last_name", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                        </fieldset>
                                        <fieldset className="flex flex-col justify-center md:items-center md:flex-row gap-4">
                                            <legend className="mb-7 text-2xl font-semibold whitespace-nowrap">Dados de Contato</legend>
                                            <Input
                                                disable={disable}
                                                label={"Email"}
                                                type={"email"}
                                                value={inputValue.email ?? ""}
                                                error={error.email ?? ""}
                                                filled={filledOutCorrectly.email}
                                                onChange={(event) => handleInputChange("email", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                            <Input
                                                disable={disable}
                                                label={"Telefone"}
                                                type={"text"}
                                                value={inputValue.telephone ?? ""}
                                                error={error.telephone ?? ""}
                                                filled={filledOutCorrectly.telephone}
                                                onChange={(event) => handleInputChange("telephone", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                        </fieldset>
                                    </div>
                                    <ButtonDefault
                                        label="Salvar"
                                        loadder={loading}
                                        flexible={false}
                                        icon={<LuSave className="text-xl" />}
                                        onClick={(event) => {
                                            event?.preventDefault();
                                            handleSubmit(inputValue)
                                        }}
                                    />
                                </form>
                            </div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold mb-2 mt-6 lg:text-2xl">Conectividade e Segurança</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
                                <form action="" className="col-span-2">
                                    <div className="gap-x-14">
                                        <fieldset className="flex flex-col justify-center md:items-center md:flex-row gap-4">
                                            <legend className="mb-7 text-2xl font-semibold whitespace-nowrap">Redefinir Senha</legend>
                                            <Input
                                                disable={disable}
                                                label={"Senha"}
                                                type={"password"}
                                                value={inputValue.password ?? ""}
                                                error={error.password ?? ""}
                                                filled={filledOutCorrectly.password}
                                                onChange={(event) => handleInputChange("password", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                            <Input
                                                disable={disable}
                                                label={"Confirme a senha"}
                                                type={"password"}
                                                value={inputValue.confirmPassword ?? ""}
                                                error={error.confirmPassword ?? ""}
                                                filled={filledOutCorrectly.confirmPassword}
                                                onChange={(event) => handleInputChange("confirmPassword", event?.target.value)}
                                                marginBottom="mb-5"
                                            />
                                        </fieldset>
                                    </div>
                                    <ButtonDefault
                                        label="Redefinir"
                                        loadder={loadingPassword}
                                        flexible={false}
                                        icon={<PiGearSixBold className="text-xl" />}
                                        onClick={(event) => {
                                            event?.preventDefault();
                                            handleRedefine(inputValue.password ?? "")
                                        }}
                                    />
                                </form>
                                <div className="shadow-xl rounded-xl col-span-2 mt-8 lg:mt-0 h-max md:col-span-2 lg:col-span-1">
                                    <h1 className="flex items-center gap-2 bg-yellow-500 font-bold p-4 rounded-tl-xl rounded-tr-xl">Atenção! <FiAlertTriangle className="text-xl" /></h1>
                                    <p className="p-4 text-gray-500 text-justify">Após redefinir a senha, sua sessão será encerrada. Faça login novamente para iniciar com a nova senha. Caso você tenha algum problema ao se conectar, abra um chamado na plataforma de suporte HelpDesk.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </RequireAuthentication>
        </MainLayout>
    )
}

export default Account;