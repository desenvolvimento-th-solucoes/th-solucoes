import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineInfo } from "react-icons/ai";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { Modal } from "./Modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { X } from "lucide-react";

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
                <X className="text-white text-3xl" />
            </button>
            <ul className={`flex flex-col items-center justify-center transition-all mt-10`}>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/">Início</Link></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/services">Serviços</Link></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/about">Sobre</Link></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/contact">Contato</Link></li>
                <nav className={`w-full ${showMore && "mb-4"}`}>
                    <button className={`font-medium text-md px-8 py-4 ${!showMore && "border-b-2 border-b-gray-800"} w-full text-left`} onClick={handleShowMore}>Nossas Especialidades</button>
                    {showMore && (
                        <ul>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/erp">TH ERP</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/web">TH Web</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/agribusiness">TH Agro</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/food">TH Food</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/clinicals">TH Clínicas</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/shop">TH Shop</Link></li>
                            <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/hairdressers">TH Salões</Link></li>
                        </ul>
                    )}
                </nav>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="https://lojath.com.br/">Loja</Link></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer" href="/support">Painel de Atendimento</Link></li>
                <li className="group border-b-2 border-b-gray-800 text-md font-medium transition-all w-full"><Link href="/restrict/login" className="group-hover:text-white flex justify-start px-8 py-4 items-center hover:bg-default-blue w-full active:bg-default-blue cursor-pointer">Área Restrita</Link></li>
                {authenticationContext?.localStorageData.loggedUser && authenticationContext.localStorageData.isLogged && (
                    <>
                        <li className="group text-md font-medium transition-all w-full"><Link className="group-hover:text-white flex justify-center py-4 items-center hover:bg-default-blue w-full active:bg-default-blue" href="/learning">Treinamentos</Link></li>
                        <li className="group text-md font-medium transition-all w-full"><Link href="/" className="group-hover:text-white flex text-red-700 justify-center py-4 items-center hover:bg-red-700 w-full active:bg-red-700" onClick={() => handleAskLogout()}>Sair</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}