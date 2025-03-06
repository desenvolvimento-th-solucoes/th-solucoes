import { useContext, useState } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { ComboBox } from "../ComboBox";
import { ComboOption } from "../ComboOption";
import { BiMenuAltRight, BiPowerOff, BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdAdminPanelSettings, MdFastfood, MdMedicalServices, MdOutlineManageAccounts } from "react-icons/md";
import { MobileMenu } from "../MobileMenu";
import { useRouter } from "next/router";
import { features } from "@/app/features/features";
import { Modal } from "../Modal";
import { AiOutlineInfo } from "react-icons/ai";
import { BsGlobe, BsScissors } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const MasterHeader = ({ enable }: { enable: boolean }) => {
    const authenticationContext = useContext(AuthenticationContext);
    const navigate = useRouter();

    const [hidden, setHidden] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleAskLogout = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        authenticationContext?.logout();
        setShowModal(false);
        navigate.push("/");
    }

    const openMenu = () => setShowMenu(true);
    const closeMenu = () => setShowMenu(false);

    React.useEffect(() => {
        console.log(navigate.pathname)
    })

    return (
        <header className={`${!enable && navigate.pathname !== "/clinicals" && navigate.pathname !== "/learning" && "bg-transparent h-20"} ${!enable && (navigate.pathname === "/clinicals" || navigate.pathname === "/learning") && "h-20 shadow-gray-800 shadow-lg bg-default-black"} ${enable && "h-24 shadow-gray-800 shadow-lg bg-default-black"} duration-slow z-40 transition-all w-screen text-white flex justify-center fixed`}>
            <nav className="container mx-auto flex items-center justify-between h-full w-full relative px-4">
                <Link href="/" className="h-full pl-4 flex items-center z-10"><Image width={200} height={60} src="/assets/images/th-solucoes-logo1.png" alt="" /></Link>
                <ul className="hidden xl:flex items-center justify-center h-full">
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link href="/" className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full">Início</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link href="/services" className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full">Serviços</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link href="/about" className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full">Sobre</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link href="/contact" className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full">Contato</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="https://webmail.thsolucoes.com/">Webmail</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="https://lojath.com.br/">Loja</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full">
                        <ComboBox label={"TH Sistemas"} >
                            <ComboOption labelColor="text-white" label={"TH Web"} icon={<BsGlobe className="text-xl" />} href={"/web"} />
                            <ComboOption labelColor="text-white" label={"TH Agro"} icon={<FaCarrot className="text-xl" />} href={"/agribusiness"} />
                            <ComboOption labelColor="text-white" label={"TH Food"} icon={<MdFastfood className="text-xl" />} href={"/food"} />
                            <ComboOption labelColor="text-white" label={"TH Clínicas"} icon={<MdMedicalServices className="text-xl" />} href={"/clinicals"} />
                            <ComboOption labelColor="text-white" label={"TH Shop"} icon={<BiShoppingBag className="text-xl" />} href={"/shop"} />
                            <ComboOption labelColor="text-white" label={"TH Salões"} icon={<BsScissors className="text-xl" />} href={"/hairdressers"} />
                        </ComboBox>
                    </li>   
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="/support">Painel de Atendimento</Link></li>
                    <li className="group text-md font-semibold transition-all hover:bg-default-blue h-full"><Link href="/restrict/login" className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full">Área Restrita</Link></li>
                </ul>
                <Modal
                    contextBorderColor="border-default-blue"
                    contextButtonColor="bg-default-blue"
                    title={"Deseja encerrar a sessão?"}
                    message={"Se deseja permanecer conectado, clique em CANCELAR. Caso queira garantir a segurança da sua conta, clique em CONFIRMAR."}
                    icon={<AiOutlineInfo className="text-default-blue text-5xl" />}
                    show={showModal}
                    options={true}
                    labelOption1="CONFIRMAR"
                    labelOption2="CANCELAR"
                    onClickFirstOption={handleConfirmLogout}
                    onClickSecondOption={() => setShowModal(false)}
                />
                {authenticationContext?.localStorageData.loggedUser && authenticationContext.localStorageData.isLogged ? (
                    <button className="flex items-center gap-2">
                        <div className={`hidden ${!hidden && "xl:flex"} gap-4 h-full lg:items-center lg:justify-center`}>
                            <ComboBox label={`Olá, ${features.toCapitalize(authenticationContext.localStorageData.loggedUser.name)}`} icon={<HiOutlineUserCircle className="text-white text-2xl" />}>
                                <ComboOption labelColor="text-white" label={"Treinamentos"} icon={<MdAdminPanelSettings className="text-xl" />} href={"/learning"} />
                                {/* <ComboOption labelColor="text-white" label={"Conta"} icon={<MdOutlineManageAccounts className="text-xl" />} href={"/account")} > */}
                                <ComboOption onClick={handleAskLogout} href="/" labelColor="text-red-700 font-semibold" label={"Sair"} icon={<BiPowerOff className="text-red-700 text-xl" />} />
                            </ComboBox>
                        </div>
                        <button onClick={openMenu} className="xl:hidden">
                            <BiMenuAltRight className="text-3xl" />
                        </button>
                        <MobileMenu handleShowMore={() => setShowMore(!showMore)} showMore={showMore} onClick={closeMenu} show={showMenu} />
                    </button>
                ) : (
                    <>
                        {authenticationContext?.localStorageData.loggedUser && authenticationContext.localStorageData.isLogged ? (
                            <p>Olá, {features.toCapitalize(authenticationContext.localStorageData.loggedUser.name)}</p>
                        ) : null}
                        <button onClick={openMenu} className="xl:hidden">
                            <BiMenuAltRight className="text-3xl" />
                        </button>
                        <MobileMenu handleShowMore={() => setShowMore(!showMore)} showMore={showMore} onClick={closeMenu} show={showMenu} />
                    </>
                )}
            </nav>
        </header>
    )
}