import { AiOutlineTeam } from "react-icons/ai";
import { Button } from "@/app/components/button";
import { features } from "@/app/features/features";
import { MinimalCard } from "@/app/components/cards/MinimalCard";
import { NormalCard } from "@/app/components/cards/NormalCard";
import { PiTargetBold } from "react-icons/pi";
import { IoDiamondOutline, IoEye } from "react-icons/io5";
import '../src/app/globals.css';
import MainLayout from "@/layouts/App";

const About = () => {
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full">
                <section className="h-screen flex items-center bg-about bg-no-repeat bg-cover bg-center">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center text-white bg-black/80 h-screen w-screen px-4">
                            <div className="w-full flex flex-col items-center lg:w-1/2">
                                <h1 className="font-bold mb-4 text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl">Nossos Fundamentos</h1>
                                <p className="text-sm sm:text-md md:text-lg font-extralight mb-6 text-center lg:text-xl">Investimos incansavelmente em entender as necessidades exclusivas de cada cliente. Isso nos permite personalizar soluções e serviços que se alinham perfeitamente com suas metas e aspirações. Valorizamos cada interação com nossos clientes, buscando ouvir atentamente, responder prontamente e superar expectativas.</p>
                                <Button.Root defaultTextColor="" label="Conheça-nos" hoverTextColor="" onClick={() => features.handleScrollTo("#team")}>
                                    <Button.Icon color="" icon={<AiOutlineTeam className="absolute left-0 ml-3" />} backgroundColor="bg-default-blue" />
                                </Button.Root>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="team">
                    <div className="container px-4 mx-auto py-12 gap-8 grid grid-cols-1 lg:grid-cols-2">
                        <div className="shadow-xl shadow-gray-400 relative flex flex-col-reverse">
                            <img src="/assets/images/about-image.jpg" className="w-full h-full" alt="" />
                        </div>
                        <div>
                            <div>
                                <span className="text-2xl font-semibold text-default-blue">Sobre Nós</span>
                                <h2 className="text-2xl font-bold lg:text-5xl">Missão, Visão e Valores</h2>
                                <p className="font-extralight text-md mt-6 text-justify lg:text-xl">Fornecemos um conjunto completo de soluções de TI, buscando sempre entender o seu negócio para criar soluções eficientes para sua empresa. Enquanto cuidamos da sua infraestrutura, servidores e computadores, você fica focado nos produtos de seu negócio. </p>
                            </div>
                            <div className="mt-12">
                                <h3 className="text-3xl font-bold">Nossa Estratégia</h3>
                                <p className="font-extralight text-md mt-6 text-justify lg:text-xl">A nossa proposta é oferecer a você a mais completa rede de serviços de tecnologia especializados, desenvolvimento de softwares, Infraestrutura, servidor local e nuvem, firewall, plataforma de backup em nuvem, sites, antivírus corporativos, sistemas, serviço de fibra óptica, sistema de monitoramento outsourcing de Tecnologia da Informação e Comunicação (TIC), monitoramento de servidores e estrutura de rede, telefonia IP, busca de novas tecnologias e dentre eles consultoria.</p>
                            </div>
                        </div>
                        <MinimalCard
                            text="Transparência & Honestidade"
                            textStyle="font-semibold text-md lg:text-3xl"
                            className="w-full"
                        />
                        <MinimalCard
                            text="Tecnologia & Habilidade"
                            textStyle="font-semibold text-md lg:text-3xl"
                            className="w-full"
                        />
                        <div className="flex flex-col items-center gap-8 lg:col-span-2 lg:flex-row">
                            <NormalCard
                                title="Missão"
                                body="Estreitar a comunicação entre os nossos clientes com soluções inovadoras de TI."
                                icon={<PiTargetBold className="text-6xl" />}
                            />
                            <NormalCard
                                title="Visão"
                                body="Ser referência na excelência de serviços de tecnologia da informação e comunicação."
                                icon={<IoEye className="text-6xl" />}
                            />
                            <NormalCard
                                title="Valores"
                                body="Transparência / Honestidade / Ética / Responsabilidade / Inovação / Espírito de Equipe / Dedicação / Comprometimento."
                                icon={<IoDiamondOutline className="text-6xl" />}
                            />
                        </div>
                    </div>
                </section>
            </main>
        </MainLayout>
    )
}

export default About;