"use client";

import { Button } from "@/app/components/button";
import { AiFillStar } from "react-icons/ai";
import { NormalCard } from "@/app/components/cards/NormalCard";
import { BsCheck, BsFillBuildingFill, BsFillCloudArrowUpFill, BsShieldFillCheck, BsWrenchAdjustable } from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import { GrConnectivity } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { features } from "@/app/features/features";
import '../src/app/globals.css';
import MainLayout from "@/layouts/App";
import Image from "next/image";

const Services = () => {
    return (
        <MainLayout  typeOfButtonInteraction={1}>
            <main className="w-full h-full">
                <section className="h-screen flex items-center bg-services bg-no-repeat bg-cover bg-center">
                    <div>
                        <div className="flex items-center h-screen w-screen justify-center text-white bg-black/80 px-4">
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-4 text-center">Encontre soluções de Hardware e Software</h1>
                                <p className="text-sm sm:text-md md:text-lg font-extralight mb-6 text-center lg:text-xl">Somos o seu parceiro tecnológico que molda suas ideias em código e componentes, transformando conceitos inovadores em produtos tangíveis, impulsionando seu progresso no cenário digital.</p>
                                <Button.Root defaultTextColor="" label="Nossas especialidades" hoverTextColor="" onClick={() => window.scrollTo({ top: 400, left: 0, behavior: "smooth" })}>
                                    <Button.Icon color="" icon={<AiFillStar className="absolute left-0 ml-3" />} backgroundColor="bg-default-blue" />
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="offers" className="px-4">
                    <div className="container mx-auto h-max py-12 grid gap-8 relative bottom-20 md:grid-cols-2 lg:grid-cols-3">
                        <NormalCard
                            icon={<BsShieldFillCheck className="text-6xl" />}
                            title={"Nosso Firewall"}
                            body={"Proteção online abrangente: antivírus de navegação contra ameaças, defesa anti-hackers, otimização de sua rede para desempenho superior e estratégias de alta disponibilidade para operação contínua."}
                        />
                        <NormalCard
                            icon={<BsFillBuildingFill className="text-6xl" />}
                            title={"Infraestrutura"}
                            body={"Amplie eficiência com redes estruturadas e WiFi profissional. Suporte ágil pelo helpdesk com monitoramento via chamado e SLA. Fortaleça conexões corporativas com WiFi dedicado. Garanta segurança através de projetos de câmeras de vigilância."}
                        />
                        <NormalCard
                            className={"md:col-span-full lg:col-span-1"}
                            icon={<BsFillCloudArrowUpFill className="text-6xl" />}
                            title={"Solução em Nuvem"}
                            body={"Garantimos a solidez da sua infraestrutura de TI. Isso abrange servidores e bancos de dados eficientes, estratégias de backup confiáveis e migração perfeita para a nuvem. Além disso, implementamos medidas de segurança abrangentes, incluindo soluções antivírus, para proteger seus sistemas e dados."}
                        />
                    </div>
                </section>
                <section id="solutions" className="px-4">
                    <div className="container mx-auto grid gap-8 pb-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <span className="text-2xl font-semibold text-default-blue">Nossos Serviços</span>
                            <h2 className="text-2xl font-bold lg:text-5xl">O que oferecemos</h2>
                            <p className="text-md font-extralight mt-6 lg:text-xl">Fornecemos um conjunto completo de soluções de TI, buscando sempre entender o seu negócio para criar soluções eficientes para sua empresa. Enquanto cuidamos da sua infraestrutura, servidores e computadores, você fica focado nos produtos de seu negócio. </p>
                        </div>
                        <NormalCard
                            button={false}
                            icon={<FaGears className="text-6xl" />}
                            title={"Desenvolvimento de Software"}
                            body={"Oferecemos serviços completos de tecnologia no desenvolvimento de softwares e websites de última geração até personalizações exclusivas para atender às suas necessidades específicas. Garantimos interfaces amigáveis e bom processamento das funcionalidades."}
                        />
                        <NormalCard
                            button={false}
                            icon={<BsWrenchAdjustable className="text-6xl" />}
                            title={"Manuntenção de Equipamentos"}
                            body={"Manutenção excepcional para Desktops, Notebooks, Switches e entre outros. Nossa competência assegura o desempenho otimizado desses equipamentos vitais, mantendo sua operação fluida e eficiente."}
                        />
                        <NormalCard
                            button={false}
                            icon={<MdSecurity className="text-6xl" />}
                            title={"Sistemas de Segurança"}
                            body={"Oferecemos soluções abrangentes para segurança como câmeras IP, sistemas de intercomunicação, alarmes e controle de acesso. Além disso, fornecemos serviços relacionados a servidores Windows e Linux, como backup, armazenamento, nobreaks, software de segurança, e também oferecemos contratos de suporte e manutenção."}
                        />
                        <NormalCard
                            button={false}
                            icon={<GrConnectivity className="text-6xl group-hover:text-white" />}
                            title={"Tecnologia Empresarial Integrada"}
                            body={"Impulsione sua empresa com nossas soluções de alta qualidade: Wi-Fi corporativo dedicado, telefonia eficiente, PABX-IP moderno e sistema de backup confiável, além de termos suporte a fibra ótica."}
                        />
                        <NormalCard
                            button={false}
                            icon={<MdOutlineManageHistory className="text-6xl" />}
                            title={"Monitoramento e Gerenciamento"}
                            body={"Tenha controle total em tempo real com nossa Plataforma de Monitoramento de Dispositivos Móveis. Contamos também com especialistas em sistema E.R.P Totvs para otimizar suas operações empresariais."}
                        />
                    </div>
                </section>
                <section className="bg-default-black pt-12 pb-24 px-4">
                    <div className="container mx-auto h-max text-white flex flex-col justify-between gap-12 lg:flex-row">
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-2xl font-semibold mb-4 lg:text-4xl">PABX IP</h1>
                            <p className="text-justify text-md font-extralight lg:text-lg">Proporciona a unificação dos serviços da sua empresa, como por exemplo: chat, voz, vídeo, ramal no celular, reuniões on-line. Nós oferecemos mobilidade em suas ligações e para isso basta estar conectado à internet. Com a nossa plataforma evita investimento com infraestrutura padrão (PABX), podendo remanejá-los para o seu negócio. </p>
                            <ul className="mt-10">
                                <li className="flex items-center mb-6">
                                    <div className="mr-2">
                                        <BsCheck className="text-default-blue text-5xl" />
                                    </div>
                                    <p className="font-extralight text-justify text-md lg:text-lg">
                                        <strong className="font-bold">Integração Voz e Dados:</strong> Unifica voz e dados em redes IP, simplificando infraestrutura e melhorando eficiência das comunicações empresariais.
                                    </p>
                                </li>
                                <li className="flex items-center mb-6">
                                    <div className="mr-2">
                                        <BsCheck className="text-default-blue text-5xl" />
                                    </div>
                                    <p className="font-extralight text-justify text-md lg:text-lg">
                                        <strong className="font-bold">Mobilidade:</strong> Encaminhamento, videoconferência e gravação oferecem ferramentas poderosas para melhorar interações e colaborações.
                                    </p>
                                </li>
                                <li className="flex items-center mb-6">
                                    <div className="mr-2">
                                        <BsCheck className="text-default-blue text-5xl" />
                                    </div>
                                    <p className="font-extralight text-justify text-md lg:text-lg">
                                        <strong className="font-bold">Economia:</strong> Chamadas via Internet promovem mobilidade, reduzindo custos de longa distância e mantendo conectividade global.
                                    </p>
                                </li>
                                <li className="flex items-center mb-6">
                                    <div className="mr-2">
                                        <BsCheck className="text-default-blue text-5xl" />
                                    </div>
                                    <p className="font-extralight text-justify text-md lg:text-lg">
                                        <strong className="font-bold">Recursos Avançados:</strong> Integração de voz, vídeo e mensagens cria comunicação fluida para equipes e clientes.
                                    </p>
                                </li>
                                <li className="flex items-center mb-6">
                                    <div className="mr-2">
                                        <BsCheck className="text-default-blue text-5xl" />
                                    </div>
                                    <p className="font-extralight text-justify text-md lg:text-lg">
                                        <strong className="font-bold">Comunicação Eficiente:</strong> Integração unificada aprimora atendimento ao cliente com opções diversificadas de comunicação.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-full relative lg:w-1/2">
                            <div className="w-full h-full absolute hover:bg-default-black/50 transition-all cursor-pointer z-20"></div>
                            <img src="/assets/images/services-image.jpg" alt="Futuristic Computer" className="h-full object-cover" />
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default Services;