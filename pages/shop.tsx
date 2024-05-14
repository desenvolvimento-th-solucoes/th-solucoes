import MainLayout from "@/layouts/App";
import { Button } from "@/app/components/button";
import { ButtonDefault } from "@/app/components/button/ButtonDefault";
import router from "next/router";
import { AiOutlineMessage } from "react-icons/ai";
import { BiCheckCircle, BiPlusCircle, BiShoppingBag } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const Shop = () => {
    const redirect = (target: string) => {
        window.open(target, "_blank")
    }
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <main className="w-full h-full bg-indigo-800">
                <section className="text-white px-4 container mx-auto">
                    <div className="flex items-center pt-20">
                        <div className="rounded-lg text-white">
                            <h1 className="font-bold mb-4 text-center text-lg sm:text-xl md:text-3xl lg:text-5xl">Plataforma TH Shop</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">O TH Shop é uma plataforma de gestão completa desenvolvida especificamente para atender às necessidades de lojas e varejo. Este sistema oferece uma ampla gama de recursos e funcionalidades para otimizar a operação desses estabelecimentos de comércios.</p>
                        </div>
                    </div>
                    <Link href="https://thshop.thsistemas.tec.br" className="w-full flex justify-center hover:underline text-sm font-semibold p-2">Acesse clicando neste link! 👈</Link>
                    <div className="flex flex-col gap-8 min-h-screen py-12 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Recursos Principais</h1>
                            <p className="text-xs sm:text-sm sm:text-md font-extralight mb-6 text-center lg:text-lg">Desenvolvido para atender a todas as necessidades de comércio.</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                <div className="w-full p-2 flex items-center justify-center bg-indigo-200 text-indigo-400 font-bold rounded-lg text-xs md:text-md">Controle de Estoque</div>
                                <div className="w-full p-2 flex items-center justify-center bg-indigo-200 text-indigo-400 font-bold rounded-lg text-xs md:text-md">Importação de XML</div>
                                <div className="w-full p-2 flex items-center justify-center bg-indigo-200 text-indigo-400 font-bold rounded-lg text-xs md:text-md">Controle de Pedidos</div>
                                <div className="w-full p-2 flex items-center justify-center bg-indigo-200 text-indigo-400 font-bold rounded-lg text-xs md:text-md">Catálogo de Produtos</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Personalização Completa</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Flexibilidade e autonomia para o seu negócio.</p>
                            <div className="w-full flex justify-center">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Crie suas próprias páginas
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Cadastre parceiros
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-sm md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Pagamentos online e offine
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segmentos</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Tipos de negócio do pequeno e médio varejo.</p>
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-indigo-800 text-white">
                                        <BiShoppingBag className="text-2xl lg:text-4xl" />
                                        <h1>Lojas</h1>
                                    </div>
                                    <div className="flex text-center items-center w-full justify-center flex-col rounded-lg p-4 text-xs lg:text-lg transition-all bg-indigo-800 text-white">
                                        <CiShoppingCart className="text-2xl lg:text-4xl" />
                                        <h1>Varejo</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Segurança e Privacidade</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">A loja atende integralmente à Lei Geral de Proteção de Dados (LGPD)</p>
                            <div className="flex flex-col gap-4 w-full">
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-indigo-800 text-2xl mr-2" /></div>Controle</div>
                                <div className="rounded-lg w-full p-4 bg-white text-black flex items-center justify-center text-sm md:text-lg"><div><BiPlusCircle className="text-indigo-800 text-2xl mr-2" /></div>Veracidade e Coerência</div>
                            </div>
                        </div>
                        <div className="bg-white text-black rounded-lg h-full w-full p-4 flex items-center justify-center flex-col">
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Integração Completa</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">A plataforma possui diversas possibilidades para atender diferentes âmbitos.</p>
                            <div className="w-full flex justify-center mb-6">
                                <ul className="list-none w-max flex flex-col items-center">
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Correios
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        TH Web
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Mercado Livre
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Mercado Pago
                                    </li>
                                    <li className="flex items-center mb-2 w-full text-xs md:text-md lg:text-lg">
                                        <div><BiCheckCircle className="text-green-500 text-xl mr-2" /></div>
                                        Whatsapp
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="h-full w-full p-4 flex items-center justify-center flex-col">
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
                                    <ButtonDefault textColor="text-black" defaultColor="bg-white" loadder={false} label="Agendar uma chamada" ></ButtonDefault>
                                </div>
                            </div>
                            <h1 className="font-bold text-center text-md sm:text-lg md:text-xl lg:text-2xl">Fale Conosco</h1>
                            <p className="text-xs sm:text-sm md:text-md font-extralight mb-6 text-center lg:text-lg">Envie-nos uma mensagem.</p>
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
    );
}

export default Shop;