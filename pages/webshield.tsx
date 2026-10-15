"use client";

import MainLayout from "@/layouts/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineMessage } from "react-icons/ai";
import { BiCheckCircle, BiPlusCircle, BiWorld } from "react-icons/bi";
import { BsBag, } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { GiAmericanFootballBall } from "react-icons/gi";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { GoVideo } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { MdNoAdultContent } from "react-icons/md";
import { LuPopcorn } from "react-icons/lu";
import { GiPirateHook } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import Link from "next/link";

const Web = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-gray-700">
                <section className="text-white px-4 container mx-auto">
                    <div className="flex items-center pt-32">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">TH WebShield</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O TH WebShield é uma solução inteligente de segurança que ajuda sua empresa a controlar o acesso à internet, bloquear ameaças e conteúdos inadequados e aumentar a produtividade dos usuários. Com filtros configuráveis e gerenciamento simplificado, você protege sua rede com poucos cliques.</p>
                        </div>
                    </div>
                    <Link href="http://thwebshield.thsolucoes.com/" className="w-full flex justify-center hover:underline text-sm font-semibold p-2">Acesse clicando neste link! 👈</Link>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Proteção Avançada</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Bloqueie sites nocivos, phishing e malware para reduzir riscos e proteger os usuários contra ameaças cibernéticas.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Phishing</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Malware</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Sites nocivos</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Ameaças</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Proteção web</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-sm md:text-lg">Segurança</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Filtros Inteligentes</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Ative filtros específicos para reduzir riscos, bloquear domínios suspeitos e controlar o conteúdo acessado na rede.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <center><div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs md:text-md">Domínios suspeitos</div></center>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs md:text-md">Phishing</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs md:text-md">Malware</div>
                                <div className="flex items-center justify-center gap-4 sm:col-span-3">
                                    <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs md:text-md">Rastreadores</div>
                                    <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs md:text-md">Anúncios</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Filtros de Segurança</h1>
                            <p className="text-xs sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Descubra como os filtros de segurança podem ajudar a proteger a rede e aumentar a produtividade da sua equipe.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-max">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Filtros configuráveis
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Privacidade e Segurança
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Proteção contra Ameaças
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Produtividade e Foco
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Google SafeSearch
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Visão centralizada
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Configuração simplificada
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Categorias de Bloqueio
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Acesso</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Configure camadas de proteção para bloquear conteúdos e domínios associados a riscos, com opções ajustáveis conforme a política da empresa.</p>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-gray-700 text-2xl mr-2" /></div>Bloqueio preventivo de ameaças</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-gray-700 text-2xl mr-2" /></div>Filtros de segurança</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Proteção contra Ameaças</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Reduza a exposição da rede a sites e serviços potencialmente perigosos com filtros voltados a diferentes tipos de ameaças.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col">
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Proteção contra phishing
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Bloqueio de malware
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Domínios recém-registrados
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Domínios com nomes suspeitos
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Bloqueio de mineração de criptomoedas
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Proteção contra sites nocivos
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Privacidade e Segurança</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Ajude a reduzir riscos de exposição de dados e acessos indesejados com filtros de privacidade e proteção da navegação.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Bloqueio de anúncios e rastreadores
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Proteção de dados
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Controle de domínios
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Gerenciamento de permissões
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Busca Segura</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Ative a Busca Protegida para ajudar a manter conteúdos adultos fora dos resultados de pesquisa.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Google SafeSearch</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Bing SafeSearch</div>
                                <div className="w-full col-span-2 p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">YouTube com modo restrito</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Produtividade e Foco</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Reduza distrações e ajude os usuários a manter o foco bloqueando categorias de sites que consomem tempo durante o trabalho.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Redes sociais</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Mensagens</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Jogos e entretenimento</div>
                                <div className="w-full p-2 flex items-center justify-center bg-gray-200 text-gray-500 font-bold rounded-lg text-xs text-center md:text-sm lg:text-lg">Vídeos e música</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col col-span-2 xl:col-span-1">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Categorias de Bloqueio</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Selecione categorias de conteúdo para aplicar regras de navegação de forma prática e centralizada.</p>
                            <div className="w-full flex justify-center mb-6">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Bloqueio por categoria
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Regras personalizáveis
                                    </li>
                                </ul>
                            </div>
                            <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-gray-200 text-gray-500 font-bold rounded-lg md:text-md lg:text-lg">Redes sociais e mensagens</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-gray-200 text-gray-500 font-bold rounded-lg md:text-md lg:text-lg">Jogos e entretenimento</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-gray-200 text-gray-500 font-bold rounded-lg md:text-md lg:text-lg">Configuração simplificada</div>
                                <div className="w-full p-2 flex items-center justify-center text-center text-xs bg-gray-200 text-gray-500 font-bold rounded-lg md:text-md lg:text-lg">Filtros de conteúdo</div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Conteúdos que Você Pode Controlar</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Personalize a navegação bloqueando categorias e tipos de conteúdo de acordo com as necessidades da sua organização.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <IoShareSocial className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Redes sociais</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <CiChat1 className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Mensagens e chats</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <IoGameController className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Jogos</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <GoVideo className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Vídeos e streaming</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <IoMusicalNotesOutline className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Música</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <BsBag className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Compras online</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <GiAmericanFootballBall className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Notícias e esportes</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <LuPopcorn className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Entretenimento</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <MdNoAdultContent className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Conteúdo adulto</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <MdAttachMoney className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Apostas e jogos de azar</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <GiPirateHook className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Pirataria e P2P</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-gray-700 text-white">
                                        <BiWorld className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Categorias personalizadas</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-start flex-col col-span-2 xl:col-span-1">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Agende uma Chamada</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div>
                                <ul className="list-none w-full mb-6">
                                    <li className="flex items-center text-xs md:text-sm lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Atendimento Dedicado
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Disponibilidade de Horários
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Maior Confiabilidade
                                    </li>
                                </ul>
                                <div className="mb-10">
                                    <ButtonDefault defaultColor="bg-black" loadder={false} label="Agendar uma chamada" ></ButtonDefault>
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

export default Web;