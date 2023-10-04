import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export const MasterFooter = () => {
    return (
        <footer className="w-screen bg-white pt-12 h-max relative">
            <div className="container mx-auto text-black flex gap-12 flex-col px-4 md:flex-row">
                <div>
                    <h1 className="text-2xl font-bold text-center md:text-left">Fale Conosco</h1>
                    <div className="flex items-center flex-col mt-4 md:flex-row">
                        <div className="rounded-full w-10 h-10 mr-0 bg-sky-700 text-white flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                            <BsTelephone className="text-xl"/>
                        </div>
                        <div>
                            <p className="text-center md:text-left">(19) 3090-1424</p>
                            <p className="text-center md:text-left">(19) 91000-5366</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-4 md:flex-row">
                        <div className="rounded-full w-10 h-10 p-3 mr-0 box-border bg-sky-700 text-white flex items-center justify-center mb-2 md:mb-0 md:mr-4">
                            <FaLocationDot className="text-xl"/>
                        </div>
                        <div>
                            <p className="text-center md:text-left">Rua Dr. Jose Alves, 313-B - Centro Mogi Mirim - São Paulo, 13800-050, Brazil</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-center md:text-left">Sobre Nós</h1>
                    <ul>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/">Início</Link></li>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/services">Serviços</Link></li>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/about">Quem Somos</Link></li>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/contact">Contato</Link></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-bold text-center md:text-left">Autenticação</h1>
                    <ul>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/login">Iniciar Sessão</Link></li>
                        <li className="group text-lg text-gray-500 transition-all text-center lg:text-left"><Link className="group-hover:text-default-blue" href="/register">Registrar-se</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full bg-default-blue text-white mt-12 flex justify-center items-center px-4 text-center py-2">
                <p>Copyright © 2023 TH Soluções – Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}