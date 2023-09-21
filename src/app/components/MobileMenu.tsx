import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineInfo } from "react-icons/ai";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { Modal } from "./Modal";
import { useRouter } from "next/router";

type Props = {
    onClick: () => void;
    handleShowMore: () => void;
    show: boolean;
    showMore: boolean;
}

export const MobileMenu = ({ show, onClick, handleShowMore, showMore }: Props) => {
    const authenticationContext = useContext(AuthenticationContext);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    
    const handleAskLogout = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        authenticationContext?.logout();
        setShowModal(false);
        router.push("/");
    }

    return (
        <nav className={`fixed w-screen min-h-screen inset-0 bg-default-black z-40 overflow-y-auto overflow-x-hidden duration-slow transition-all ${show && "ml-0"} ${!show && "ml-mobile-menu"}`}>
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
            <button onClick={onClick} className="w-full flex justify-start p-4 bg-default-blue z-10">
                <AiOutlineClose className="text-white text-3xl"/>
            </button>
            <ul className={`flex flex-col items-center justify-center transition-all mt-10`}>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/")}>Início</a></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/services")}>Serviços</a></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/about")}>Sobre</a></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/contact")}>Contato</a></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/restrict/login")}>Área Restrita</a></li>
                <nav className={`w-full ${showMore && "mb-4"}`}>
                    <button className={`font-medium text-md px-8 py-4 ${!showMore && "border-b-2 border-b-gray-800"} w-full text-left`} onClick={handleShowMore}>Nossas Especialidades</button>
                    {showMore && (
                        <ul>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/web")}>TH Web</a></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/agribusiness")}>TH Agro</a></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/clinicals")}>TH Clínicas</a></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/food")}>TH Food</a></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" onClick={() => router.push("/hairdressers")}>TH Salões & Barbearias</a></li>
                        </ul>
                    )}
                </nav>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="https://lojath.com.br/">Loja</a></li>
                {authenticationContext?.localStorageData.loggedUser && authenticationContext.localStorageData.isLogged && (
                    <>
                        <li className="group text-md font-medium transition-all w-full"><a className="group-hover:text-white flex justify-center py-4 items-center hover:bg-default-blue w-full active:bg-default-blue" onClick={() => router.push("/account")}>Conta</a></li>
                        <li className="group text-md font-medium transition-all w-full"><a className="group-hover:text-white flex text-red-700 justify-center py-4 items-center hover:bg-red-700 w-full active:bg-red-700" onClick={() => handleAskLogout()}>Sair</a></li>     
                    </>    
                )}
            </ul>
        </nav>
    )
}