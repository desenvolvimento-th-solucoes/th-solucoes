"use client";

import MainLayout from "@/layouts/App";
import { Button } from "@/app/components/button";
import { useRouter } from "next/router";
import { AiOutlineMessage } from "react-icons/ai";
import { BiBookBookmark, BiCar, BiCheckCircle, BiDiamond, BiGift, BiPlusCircle, BiWorld } from "react-icons/bi";
import { BsBag, BsShopWindow } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { IoConstruct } from "react-icons/io5";
import { GiBread, GiChickenOven, GiClothes, GiFruitBowl } from "react-icons/gi";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import Link from "next/link";

const Web = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    const router = useRouter();
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-default-blue">
                <section className="text-white px-4 container mx-auto">
                    <div className="flex items-center pt-32">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH WEB</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O sistema TH Web é como um painel de controle virtual para empresas. Ele oferece uma interface fácil de usar e recursos para gerenciar finanças, estoque, vendas, e muito mais. Você pode controlar e tomar decisões com base em informações importantes, tudo em um só lugar. É como ter o controle total do seu negócio na ponta dos seus dedos.</p>
                        </div>
                    </div>
                    <Link href="https://thweb.thsistemas.tec.br" className="w-full flex justify-center hover:underline text-sm font-semibold p-2">Acesse clicando neste link! 👈</Link>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Emissão de Documentos Fiscais</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Emissão de documentos fiscais de forma descomplicada.</p>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">NFe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">NFCe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">NFSe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">CTe</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">CTeOS</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-sm md:text-lg">MDFe</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Fiscal e Contábil</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Desenvolvido para MEI, ME, Simples, Lucro Real e Lucro Presumido.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Sintegra</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Sped Fiscal</div>
                                <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Contribuições</div>
                                <div className="flex items-center justify-center gap-4 sm:col-span-3">
                                    <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Bloco K</div>
                                    <div className="w-full p-2 flex items-center justify-center bg-blue-200 text-blue-400 font-bold rounded-lg text-xs md:text-md">Livro Caixa</div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Gerenciamento Completo</h1>
                            <p className="text-xs sm:text-sm md:text-lg font-extralight mb-6 text-center lg:text-lg">Diversas especialidades para o controle do seu negócio.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 w-max">
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Integrações Inclusivas
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Finanças
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Vendas
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Estoque
                                    </li>
                                </ul>
                                <ul className="list-none w-full">
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Controle de Caixa
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Painel do Contador
                                    </li>
                                    <li className="flex items-center text-xs md:text-sm lg:text-md">
                                        <div><BiCheckCircle className="text-green-500 mr-2" /></div>
                                        Entrada Automática de Notas
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
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Entrada de Notas Automáticas</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-default-blue text-2xl mr-2" /></div>Painel do Contador Gratuito</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Vendas</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O controle de vendas do sistema oferece uma visão precisa e eficiente das operações comerciais.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col">
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Pedido de Venda e Ordem de Serviço
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Orçamento e Condicional
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Venda Externa e Futura
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Cotações e Compras
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Geração de Contratos
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Geração de Romaneios
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Controle de Finanças</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">A gestão financeira eficaz, garantindo estabilidade e tomada de decisões inteligentes para o negócio.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Controle de contas a pagar e receber
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Orçamentos
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Conciliação Bancária
                                    </li>
                                    <li className="flex items-center w-full mb-2 text-xs text-left md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Emitir boletos integrados ao seu banco
                                    </li>
                                </ul>
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
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col col-span-2 xl:col-span-1">
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
                        <div className="lg:col-span-2 bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Tipos de negócio do pequeno e médio varejo.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BsBag className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Prestadores de Serviços</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BiBookBookmark className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Livrarias e Papelarias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <GiChickenOven className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Mercados e Açougues</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <GiClothes className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Lojas de Roupas e Acessórios</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <GiBread className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Panificadores e Cafeterias</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BiDiamond className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Joalherias e Óticas</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <GiFruitBowl className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Horti-fruti e Verdureira</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BsShopWindow className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Conveniências</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BiGift className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Presentes e Variedades</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <IoConstruct className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Contruções e Ferragens</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BiCar className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Autopeças e Oficinas</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-default-blue text-white">
                                        <BiWorld className="text-2xl lg:text-4xl" />
                                        <h1 className="text-sm lg:text-lg">Outros</h1>
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