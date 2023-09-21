"use client";

import MainLayout from "@/app/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { LuWheat } from "react-icons/lu";
import { MdOutlineBlindsClosed } from "react-icons/md";
import { PiWarehouseLight } from "react-icons/pi";
import { LiaTractorSolid } from "react-icons/lia";

const Agribusiness = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-default-blue">
                <section className="container mx-auto text-white px-4">
                    <div className="flex items-center pt-20">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH Agro</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O TH Agro é um sistema projetado especificamente para atender às necessidades das pessoas envolvidas no agronegócio. Ele oferece uma variedade de recursos e funcionalidades para simplificar e otimizar as operações relacionadas à agricultura e pecuária.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col shadow-lg shadow-slate-700">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Emissão de Documentos Fiscais</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Emissão de documentos fiscais de forma descomplicada.</p>
                            <div className="grid grid-cols-3 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">NFPe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">CTe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">MDFe</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col shadow-lg shadow-slate-700">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Fiscal e Contábil</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">NFPe, CTe, MDFe, Lucro Real e Lucro Presumido.</p>
                            <div className="gap-4 w-full flex items-center justify-center">
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-lg">Livro Caixa</div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu agronegócio.</p>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 w-max">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle Fiscal e Tributário
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Notas Automáticas
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Gestão de Safra
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Cadastro de Imóvel Rural
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle Financeiro
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Painel do Contador
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Estoque
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Gestão Inteligente
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Integrado com 98% das prefeituras do Brasil e atende a legislação de todos os estados.</p>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Desenvolvimento para Pessoa Física (CPF)</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Lucro Real e Presumido</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Finanças</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">A gestão financeira eficaz, garantindo estabilidade e tomada de decisões inteligentes para o negócio.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Controle de contas a pagar e receber
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Orçamentos
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Conciliação Bancária
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Emissão de boletos integrados com o seu banco
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Agro Fiscal</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Cadastre vários produtos rurais e emita notas fiscais independentes.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:grid-cols-2">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Recursos</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Funcionalidades</div>
                                <div className="w-full lg:col-span-2 p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Agilidade</div>
                            </div>
                            <h1 className="font-bold text-center mt-6 text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Estoque</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Maior veracidade sobre o seu estoque em suas mãos.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Controle de Produção</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Etiquetas</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Códigos</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Dados Variados</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gestão Inteligente</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Fácil interpretação e controle de suas operações.</p>
                            <div className="w-full flex justify-center mb-6">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Maior resolução de problemas
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Acessibilidade garantida
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">                                
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-blue-200 text-blue-400 font-bold rounded-lg md:text-md lg:text-lg">Dashboard</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-blue-200 text-blue-400 font-bold rounded-lg md:text-md lg:text-lg">Gráficos Detalhados</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-blue-200 text-blue-400 font-bold rounded-lg md:text-md lg:text-lg">Ajuda</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-blue-200 text-blue-400 font-bold rounded-lg md:text-md lg:text-lg">Relatórios</div>
                            </div>
                        </div>
                        <div className="bg-white col-span-1 text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Tipos de negócio do pequeno e médio varejo.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col shadow-lg rounded-lg p-4 transition-all bg-default-blue text-white">
                                        <LuWheat className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md">Produtor Rural</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col shadow-lg rounded-lg p-4 transition-all bg-default-blue text-white">
                                        <PiWarehouseLight className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md">Fazendas</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col shadow-lg rounded-lg p-4 transition-all bg-default-blue text-white">
                                        <AiOutlineTeam className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md">Cooperativas</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col shadow-lg rounded-lg p-4 transition-all bg-default-blue text-white">
                                        <MdOutlineBlindsClosed className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md">Associações</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col shadow-lg rounded-lg p-4 transition-all bg-default-blue text-white">
                                        <LiaTractorSolid className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md">Agronegócio em Geral</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 xl:col-span-1 h-full w-full p-4 flex items-center justify-start flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Agende uma Chamada</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div>
                                <ul className="list-none w-full mb-6">
                                    <li className="flex items-center text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Atendimento Dedicado
                                    </li>
                                    <li className="flex items-center text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Disponibilidade de Horários
                                    </li>
                                    <li className="flex items-center text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Maior Confiabilidade
                                    </li>
                                </ul>
                                <div className="mb-10">
                                    <ButtonDefault loadder={false} label="Agendar uma chamada" ></ButtonDefault>
                                </div>
                            </div>
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Fale Conosco</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Envie-nos uma mensagem.</p>
                            <div>
                                <div className="mb-8">
                                    <Button.Root defaultTextColor="text-white" label="Mande-nos uma mensagem" hoverTextColor="group-hover:text-white" onClick={() => router.push("/contact")}>
                                        <Button.Icon color="" icon={<AiOutlineMessage className="absolute left-0 ml-3" />} backgroundColor="bg-black" />
                                    </Button.Root>
                                </div>
                                <div>
                                    <Button.Root hoverTextColor="group-hover:text-white" defaultTextColor={"text-white"} label="Envie uma mensagem" onClick={() => redirect("https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0")}>
                                        <Button.Icon backgroundColor="bg-green-700" color="text-white" icon={<FaWhatsapp className="absolute left-0 ml-3" />} />
                                    </Button.Root>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Agribusiness;