"use client";

import MainLayout from "@/layouts/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { BiCheckCircle, BiPlusCircle } from "react-icons/bi";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaUserDoctor, FaWhatsapp } from "react-icons/fa6";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import { FaClinicMedical } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BsImages } from "react-icons/bs";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { FaRegHospital } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdHealthAndSafety } from "react-icons/md";
import Link from "next/link";

const Clinicals = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-red-800">
                <section className="container mx-auto text-black px-4">
                    <div className="flex items-center pt-32">
                        <div className="rounded-lg text-black">
                            <h1 className="font-bold mb-4 text-white text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH Pacs</h1>
                            <p className="text-xs text-white sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg"> O TH Pacs oferece um ecossistema completo para gestão de imagens médicas, telemedicina e diagnósticos, garantindo eficiência, segurança e integração total para clínicas, hospitais e centrais de laudos. </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH PACSWEB</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">PACS – na Nuvem, Gestão Completa de Exames. Ideal para clínicas, hospitais e centrais de laudos que buscam eficiência e mobilidade.</p>
                            <div className="gap-4 w-full flex items-center justify-center">
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-lg">Visualize</div>
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-lg">Laude</div>
                                <div className="w-max px-4 py-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-lg">Gerencie</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Automatize prazos de laudos e entrega de exames</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Notificações automáticas via WhatsApp, SMS, e-mail e chamadas. Defina prioridades:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Normal</div>
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Urgente</div>
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Emergência</div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-white text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gestão Completa para Clínicas e Consultórios</h1>
                            <p className="text-xs text-white sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Principais Funcionalidades:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Agendamento Inteligente
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        TeleConsulta
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Gestão de Atendimento
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Ficha Médica Digital
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Estoque Integrado
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Emissão de Laudos Rápida e Eficiente
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Resultados OnlineEntrega Rápida e Segura de Exames
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Dashboard e Relatórios em Tempo Real
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-white text-center text-md sm:text-lg md:text-xl lg:text-2xl">Acesso Seguro a Imagens Armazenadas Localmente</h1>
                            <p className="text-xs text-white sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Acesse exames armazenados internamente com segurança e praticidade. Aumento do armazenamento da infra local do cliente de acordo com a necessidade.</p>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="rounded-lg w-full p-4 bg-white flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-red-800 text-2xl mr-2" /></div>TH pacsWeb</div>
                                <div className="rounded-lg w-full p-4 bg-white flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-red-800 text-2xl mr-2" /></div>Segurança e praticidade</div>
                            </div>
                        </div>
                        <div className="text-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH pacsIntegrator</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Conecte-se a Qualquer Sistema Médico. Integre rapidamente o TH pacsWeb a sistemas como</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col">
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        RIS
                                    </li>
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        HIS
                                    </li>
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Plataformas próprias
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH pacsPrint e Sob Demanda</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Otimize a impressão de exames médicos com um sistema que personaliza cabeçalho e rodapé. Economize e Imprima Apenas Quando Necessário</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Arquive imagens</div>
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Reduza custos</div>
                                <div className="w-full col-span-2 p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">layout profissional</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH pacsWorkstation</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Garantia de Operação Mesmo Sem Internet</p>
                            <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">                                
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-red-200 text-red-400 font-bold rounded-lg md:text-md lg:text-lg">PACS local</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-red-200 text-red-400 font-bold rounded-lg md:text-md lg:text-lg">Armazenamento seguro</div>
                                <div className="w-full col-span-2 p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Fluxo operacional</div>
                            </div>
                        </div>   
                        <div className="bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH pacsWorklist</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Comunicação Inteligente com Equipamentos Radiológicos</p>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">TH pacsWorklist integra o atendimento do paciente diretamente aos equipamentos de imagem via DICOM Worklist</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Precisão total</div>
                                <div className="w-full p-2 flex items-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Imagens DICOM</div>
                                <div className="w-full p-2 flex items-center text-center justify-center bg-red-200 text-red-400 font-bold rounded-lg text-xs md:text-md">Equipamentos de imagem</div>
                            </div>
                        </div> 
                        <div className="text-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">TH pacsCapture</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Capture e Converta Imagens e Vídeos Médicos com Facilidade</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col">
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Captura e conversão de imagens médicas
                                    </li>
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Registrar imagens e vídeos
                                    </li>
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Gerar laudos
                                    </li>
                                    <li className="flex w-full mb-2 text-xs md:text-md lg:text-lg ">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Imprimir
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-white text-center text-md sm:text-lg md:text-xl lg:text-2xl">ResultaApp</h1>
                            <p className="text-xs text-white sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Acesso Online Seguro e Personalizado</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        100% online
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Sem custos de hospedagem
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Menos burocracia
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Mais eficiência
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Simples
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Intuitivas
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Escaláveis 
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Seguras
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Produtividade
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle 
                                    </li>
                                    <li className="flex items-center text-xs text-white md:text-lg lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Conectividade 
                                    </li>
                                </ul>
                            </div>
                        </div>               
                        <div className=" bg-white rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg"></p>
                            <div className="w-full">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <FaClinicMedical className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Clínicas</h1>   
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <HiOutlineOfficeBuilding className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Consultórios</h1>   
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <FaUserDoctor className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Médicos</h1>    
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <FaRegHospital className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Hospitais</h1>  
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <AiOutlineMedicineBox className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Telemedicina </h1>    
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <TbReportMedical className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Laudos Remotos</h1> 
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <HiOutlineComputerDesktop className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">HIS</h1> 
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <TbSettingsAutomation className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">RIS</h1> 
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <MdOutlineIntegrationInstructions className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Integração com Prontuários</h1>    
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <BsImages className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Diagnóstico por Imagem</h1>   
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 transition-all bg-red-800 text-white">
                                        <MdHealthAndSafety className="text-2xl lg:text-4xl" />
                                        <h1 className="text-xs lg:text-md mt-2">Profissionais da Saúde</h1> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-start flex-col col-span-2 xl:col-span-1">
                            <h1 className="font-bold text-white text-center text-md sm:text-lg md:text-xl lg:text-2xl">Agende uma Chamada</h1>
                            <p className="text-xs text-white sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div>
                                <ul className="list-none w-full mb-6">
                                    <li className="flex items-center text-sm text-white md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Atendimento Dedicado
                                    </li>
                                    <li className="flex items-center text-sm text-white md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Disponibilidade de Horários
                                    </li>
                                    <li className="flex items-center text-sm text-white md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Maior Confiabilidade
                                    </li>
                                </ul>
                                <div className="mb-10">
                                    <ButtonDefault defaultColor="bg-black" loadder={false} label="Agendar uma chamada" ></ButtonDefault>
                                </div>
                            </div>
                            <h1 className="font-bold text-center text-md text-white sm:text-lg md:text-xl lg:text-2xl">Fale Conosco</h1>
                            <p className="text-xs sm:text-sm md:text-md text-white font-extralight mb-6 text-center lg:text-lg">Envie-nos uma mensagem.</p>
                            <div>
                                <div className="mb-8">
                                    <Button.Root defaultTextColor="text-white" label="Mande-nos uma mensagem" hoverTextColor="group-hover:text-white" onClick={() => router.push("/contact")}>
                                        <Button.Icon color="text-white" icon={<AiOutlineMessage className="absolute left-0 ml-3" />} backgroundColor="bg-black" />
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

export default Clinicals;