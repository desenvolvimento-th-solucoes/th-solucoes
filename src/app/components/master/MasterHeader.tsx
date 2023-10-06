import { useContext, useState } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { ComboBox } from "../ComboBox";
import { ComboOption } from "../ComboOption";
import { BiMenuAltRight, BiPowerOff, BiShoppingBag } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdFastfood, MdMedicalServices, MdOutlineManageAccounts } from "react-icons/md";
import { MobileMenu } from "../MobileMenu";
import { useRouter } from "next/router";
import { features } from "@/app/features/features";
import { Modal } from "../Modal";
import { AiOutlineInfo } from "react-icons/ai";
import { BsGlobe, BsScissors } from "react-icons/bs";
import { FaCarrot } from "react-icons/fa6";
import Link from "next/link";

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

    return (
        <header className={`${!enable && "-mt-header"} ${enable && "mt-0"} duration-slow z-40 transition-all w-screen text-white flex justify-center fixed shadow-gray-800 shadow-lg bg-default-black`}>
            <nav className="container mx-auto flex items-center justify-between h-20 w-full relative px-4">
                <Link href="/" className="h-full flex items-center z-10"><img width={200} height={60} src="../../assets/images/th-solucoes-logo1.png" alt="" /></Link>
                <ul className="hidden xl:flex items-center justify-center h-full">
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><button className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" onClick={() => navigate.push("/")}>Início</button></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><button className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" onClick={() => navigate.push("/services")}>Serviços</button></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><button className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" onClick={() => navigate.push("/about")}>Sobre</button></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><button className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" onClick={() => navigate.push("/contact")}>Contato</button></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><button className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" onClick={() => navigate.push("/restrict/login")}>Área Restrita</button></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="https://webmail.thsolucoes.com/">Webmail</Link></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="https://lojath.com.br/">Loja</Link></li>
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full">
                        <ComboBox label={"TH Sistemas"} >
                            <ComboOption labelColor="text-white" label={"TH Web"} icon={<BsGlobe className="text-xl" />} onClick={() => navigate.push("/web")} />
                            <ComboOption labelColor="text-white" label={"TH Agro"} icon={<FaCarrot className="text-xl" />} onClick={() => navigate.push("/agribusiness")} />
                            <ComboOption labelColor="text-white" label={"TH Clínicas"} icon={<MdMedicalServices className="text-xl" />} onClick={() => navigate.push("/clinicals")} />
                            <ComboOption labelColor="text-white" label={"TH Food"} icon={<MdFastfood className="text-xl" />} onClick={() => navigate.push("/food")} />
                            <ComboOption labelColor="text-white" label={"TH Salões & Barbearias"} icon={<BsScissors className="text-xl" />} onClick={() => navigate.push("/hairdressers")} />
                            <ComboOption labelColor="text-white" label={"TH Shop"} icon={<BiShoppingBag className="text-xl" />} onClick={() => navigate.push("/shop")} />
                        </ComboBox>
                    </li>   
                    <li className="group text-md font-medium transition-all hover:bg-default-blue h-full"><Link className="group-hover:text-white flex items-center cursor-pointer px-4 w-full h-full" href="https://thsolucoes.suport.systems/">Suporte</Link></li>
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
                    <div className="flex items-center gap-4">
                        <div className={`hidden ${!hidden && "xl:flex"} gap-4 h-full lg:items-center lg:justify-center`}>
                            <p>Olá, {features.toCapitalize(authenticationContext.localStorageData.loggedUser.name)}</p>
                            <ComboBox icon={<HiOutlineUserCircle className="text-white text-2xl" />}>
                                <ComboOption labelColor="text-white" label={"Conta"} icon={<MdOutlineManageAccounts className="text-xl" />} onClick={() => navigate.push("/account")} />
                                <ComboOption labelColor="text-red-700 font-medium" label={"Sair"} icon={<BiPowerOff className="text-red-700 text-xl" />} onClick={handleAskLogout} />
                            </ComboBox>
                        </div>
                        <button onClick={openMenu} className="xl:hidden">
                            <BiMenuAltRight className="text-3xl" />
                        </button>
                        <MobileMenu handleShowMore={() => setShowMore(!showMore)} showMore={showMore} onClick={closeMenu} show={showMenu} />
                    </div>
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