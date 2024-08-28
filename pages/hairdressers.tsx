"use client";

import MainLayout from "@/layouts/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineScissor, AiOutlineMessage } from "react-icons/ai";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { TbMoustache } from "react-icons/tb";
import Link from "next/link";

const Hairdressers = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-black">
                <section className="text-white px-4 container mx-auto">
                    <div className="flex items-center pt-32">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH Salões & Barbearias</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O TH Salões & Barbearias é uma plataforma de gestão completa desenvolvida especificamente para atender às necessidades de salões de beleza e barbearias. Este sistema oferece uma ampla gama de recursos e funcionalidades para otimizar a operação desses estabelecimentos de cuidados pessoais.</p>
                        </div>
                    </div>
                    <Link href="https://thsaloes.thsistemas.tec.br" className="w-full flex justify-center hover:underline text-sm font-semibold p-2">Acesse clicando neste link! 👈</Link>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Emissão de Documentos Fiscais</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Emita documentos fiscais de forma descomplicada.</p>
                            <div className="gap-4 w-full flex items-center justify-center">
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-lg">NFe</div>
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-lg">NFCe</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Fiscal e Contábil</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Desenvolvido para MEI, ME, Simples, Lucro Real e Lucro Presumido.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Acessibilidade</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Rapidez</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Segurança</div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-max gap-8">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Agenda
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Aplicativo
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Painel de Controle
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Gerenciamento de Clientes
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle Financeiro
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Pedido de Compras
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
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Gestão de Comandas</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Painel Administrativo</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Finanças</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">A gestão financeira eficaz, garantindo estabilidade e tomada de decisões inteligentes para o negócio.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Controle de contas a pagar e receber
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Orçamentos
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Conciliação Bancária
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Emissão de boletos integrados com o seu banco
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Tipos de negócio do pequeno e médio varejo.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <TbMoustache className="text-2xl lg:text-4xl" />
                                        <h1>Barbearias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <AiOutlineScissor className="text-2xl lg:text-4xl" />
                                        <h1>Salões de Beleza</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col col-span-1 xl:col-span-2">
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
                        <div className="h-full w-full p-4 flex items-center justify-center col-span-2 lg:col-span-1 flex-col">
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
                                        <Button.Icon color="bg-default-blue" icon={<AiOutlineMessage className="absolute left-0 ml-3" />} backgroundColor="bg-black" />
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

export default Hairdressers;