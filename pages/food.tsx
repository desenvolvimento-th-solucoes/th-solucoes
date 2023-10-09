"use client";

import MainLayout from "@/app/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineMessage } from "react-icons/ai";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { FaBreadSlice, FaPizzaSlice, FaSpoon, FaTrailer, FaUserDoctor, FaWhatsapp } from "react-icons/fa6";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { FaBeer } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { GiCupcake } from "react-icons/gi";

const Food = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="bg-black w-full h-full">
                <section className="container mx-auto text-white px-4">
                    <div className="flex items-center pt-20">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH Food</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O TH Food é uma plataforma completa projetada para atender às necessidades de estabelecimentos de alimentos, como restaurantes, cafés, lanchonetes, bares e food trucks. Este sistema oferece uma ampla variedade de recursos e funcionalidades para otimizar a gestão e operação desses negócios.</p>
                        </div>
                    </div>
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
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Sintegra</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Sped Fiscal</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Contribuições</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Bloco K</div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-max gap-8">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Comandas
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Delivery
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Painel do Entregador
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Painel da Cozinha
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Loja Virtual
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Integrações
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Gestão Inteligente
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Integrado ao Ifood
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Integrado com 98% das prefeituras do Brasil e atende a legislação de todos os estados.</p>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Entrada de Notas Automáticas</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Painel do Contador Gratuito</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Frente de Caixa e PDV</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Frente de caixa e PDV confiáveis e seguros.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Controle de Caixa</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Emissão de NFCe</div>
                                <div className="w-full col-span-2 p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Venda Rápida</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Estoque</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Maior veracidade sobre o seu estoque em suas mãos.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Controle de Produção</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Etiquetas</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Códigos</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Dados Variados</div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Tipos de negócio do pequeno e médio varejo.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <FaBeer className="text-2xl lg:text-4xl" />
                                        <h1>Bares</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <FaSpoon className="text-2xl lg:text-4xl" />
                                        <h1>Restaurantes</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <FaPizzaSlice className="text-2xl lg:text-4xl" />
                                        <h1>Pizzarias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <MdOutlineSportsMotorsports className="text-2xl lg:text-4xl" />
                                        <h1>Delivery</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <FaBreadSlice className="text-2xl lg:text-4xl" />
                                        <h1>Padarias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <GiCupcake className="text-2xl lg:text-4xl" />
                                        <h1>Docerias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <CiShop className="text-2xl lg:text-4xl" />
                                        <h1>Lanchonetes</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <FaTrailer className="text-2xl lg:text-4xl" />
                                        <h1>Trailers & Foodtrucks</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center col-span-2 xl:col-span-1 flex-col">
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

export default Food;