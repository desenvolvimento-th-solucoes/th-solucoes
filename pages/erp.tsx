import MainLayout from "@/layouts/App";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { PaintBucket } from "lucide-react";
import { BsCashStack } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaFileInvoiceDollar, FaBoxes, FaStore, FaChartLine, FaUsers, FaIndustry, FaTools, FaTshirt, FaPlane, FaAppleAlt, FaWrench, FaHamburger, FaCogs, FaBuilding, FaClipboardList, FaStoreAlt, FaPlug, FaPhone, FaHospital, FaTv, FaBroom, FaTruck, FaGlassCheers } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GiChemicalDrop } from "react-icons/gi";
import PricingSection from "@/erp/pricing-section";

const dedicatedModules = [
    {
        icon: <BsCashStack className="h-10 w-10 text-default-blue" />,
        title: "Gestão Financeira",
        description: <p>Gerencie <strong>boletos, cobranças, receitas e despesas</strong> em uma plataforma totalmente integrada. Controle seu fluxo de caixa com <strong>praticidade</strong>, onde e quando quiser.</p>
    },
    {
        icon: <FaFileInvoiceDollar className="h-10 w-10 text-default-blue" />,
        title: "Módulo Fiscal Completo",
        description: <p>Emita e gerencie todos os seus <strong>documentos fiscais</strong> em um só lugar, com rapidez e facilidade. Gere <strong>NFe, NFCe, CTe, MDFe, SPED Fiscal</strong> e extraia XMLs de todas as notas emitidas sem complicação.</p>
    },
    {
        icon: <FaBoxes className="h-10 w-10 text-default-blue" />,
        title: "Gestão de Estoque Eficiente",
        description: <p>Controle <strong>múltiplos depósitos</strong>, gerencie compras de insumos e mercadorias por <strong>lote, validade ou número de série</strong>. Utilize funcionalidades avançadas como <strong>cotações online</strong> e cadastro automático via nota de entrada.</p>
    },
    {
        icon: <FaStore className="h-10 w-10 text-default-blue" />,
        title: "Frente de Caixa Integrada",
        description: <p>Registre <strong>vendas</strong>, emita <strong>NFC-e e CF-e SAT</strong> e tenha integração total com <strong>financeiro e estoque</strong>. Compatível com <strong>leitores de código de barras</strong> e <strong>impressoras não fiscais</strong>, disponível para uso online e offline.</p>
    },
    {
        icon: <FaChartLine className="h-10 w-10 text-default-blue" />,
        title: "Central de Integrações",
        description: <p>Conecte seu sistema a <strong>múltiplas lojas</strong> em diversas plataformas. Gerencie <strong>operações, estoques, vendas, emissão de notas, pagamentos e entregas</strong> de forma centralizada e eficiente.</p>
    },
    {
        icon: <AiOutlineBarChart className="h-10 w-10 text-default-blue" />,
        title: "Relatórios",
        description: <p>Acompanhe sua empresa de ponta a ponta, com <strong>relatórios financeiros, de lucratividade, de vendas, de estoque e fiscais</strong> para ajudar na tomada de decisões. E se precisar, você ainda pode <strong>personalizar relatórios específicos</strong> para o seu negócio!</p>
    },
    {
        icon: <FaUsers className="h-10 w-10 text-default-blue" />,
        title: "CRM e Força de Vendas",
        description: <p>Visualize <strong>indicadores essenciais</strong> de oportunidades, campanhas e desempenho da equipe de vendas. Utilize <strong>gráficos dinâmicos</strong> para monitorar ações, agendamentos e resultados diários.</p>
    },
    {
        icon: <FaIndustry className="h-10 w-10 text-default-blue" />,
        title: "Gestão de Produção (PCP)",
        description: <p>Uma solução intuitiva para <strong>indústrias de qualquer porte</strong>. Gerencie <strong>ordens de produção</strong>, simule processos e atenda às exigências fiscais, incluindo <strong>Bloco K e H do SPED Fiscal</strong>.</p>
    }
];

const segments = [
    { icon: <FaTools className="h-10 w-10 text-default-blue animate-none" />, title: "Assistência Técnica", contains: ["Ordem de Serviço", "Controle de Equipamentos", "Gestão de Clientes", "Emissão de Notas Fiscais"] },
    { icon: <FaTshirt className="h-10 w-10 text-default-blue animate-none" />, title: "Vestuário", contains: ["Gestão de Estoque", "Emissão de Notas Fiscais", "Controle de Lotes", "Gestão de Vendas"] },
    { icon: <FaPlane className="h-10 w-10 text-default-blue animate-none" />, title: "Agências de turismo", contains: ["Gestão de Vendas", "Emissão de NFS-e", "Cadastro de Pacotes", "Controle de Reservas"] },
    { icon: <FaAppleAlt className="h-10 w-10 text-default-blue animate-none" />, title: "Produtos Alimentícios", contains: ["Gestão de Estoque", "Controle de Validade", "Cadastro de Fornecedores", "Gestão de Compras"] },
    { icon: <FaWrench className="h-10 w-10 text-default-blue animate-none" />, title: "Autopeças", contains: ["Ordem de Produção", "Gestão de Estoque", "Cadastro de Fornecedores", "Controle de Qualidade"] },
    { icon: <FaHamburger className="h-10 w-10 text-default-blue animate-none" />, title: "Lanchonetes e Bares", contains: ["Gestão de Vendas", "Controle de Estoque", "Gestão de Cardápio", "Atendimento ao Cliente"] },
    { icon: <FaCogs className="h-10 w-10 text-default-blue animate-none" />, title: "Serviços de Engenharia", contains: ["Gestão de Projetos", "Emissão de NFS-e", "Controle de Materiais", "Planejamento de Obras"] },
    { icon: <FaBuilding className="h-10 w-10 text-default-blue animate-none" />, title: "Construção", contains: ["Gestão de Obras", "Controle de Materiais", "Acompanhamento de Andamento", "Gestão de Equipes"] },
    { icon: <FaClipboardList className="h-10 w-10 text-default-blue animate-none" />, title: "Consultoria Empresarial", contains: ["Gestão de Serviços", "Emissão de NFS-e", "Planejamento Estratégico", "Análise de Mercado"] },
    { icon: <FaStoreAlt className="h-10 w-10 text-default-blue animate-none" />, title: "Loja Virtual", contains: ["Integração com Marketplaces", "Gestão de Pedidos", "Gestão de Produtos", "Análise de Vendas"] },
    { icon: <GiChemicalDrop className="h-10 w-10 text-default-blue animate-none" />, title: "Cosméticos e Perfumes", contains: ["Gestão de Estoque", "Controle de Lotes", "Cadastro de Fornecedores", "Gestão de Vendas"] },
    { icon: <FaPlug className="h-10 w-10 text-default-blue animate-none" />, title: "Serviços Elétricos", contains: ["Ordem de Serviço", "Gestão de Equipamentos", "Controle de Materiais", "Atendimento ao Cliente"] },
    { icon: <FaTshirt className="h-10 w-10 text-default-blue animate-none" />, title: "Confecção de Roupas", contains: ["Gestão de Produção", "Controle de Qualidade", "Cadastro de Modelos", "Gestão de Vendas"] },
    { icon: <FaTools className="h-10 w-10 text-default-blue animate-none" />, title: "Ferramentas e Ferragens", contains: ["Gestão de Estoque", "Controle de Fornecedores", "Gestão de Compras", "Análise de Vendas"] },
    { icon: <FaPhone className="h-10 w-10 text-default-blue animate-none" />, title: "Telefonia e Comunicação", contains: ["Gestão de Vendas", "Suporte Técnico", "Cadastro de Planos", "Atendimento ao Cliente"] },
    { icon: <FaHospital className="h-10 w-10 text-default-blue animate-none" />, title: "Produtos Hospitalares", contains: ["Gestão de Estoque", "Controle de Validade", "Cadastro de Fornecedores", "Gestão de Compras"] },
    { icon: <FaTv className="h-10 w-10 text-default-blue animate-none" />, title: "Eletro-domésticos", contains: ["Gestão de Vendas", "Assistência Técnica", "Cadastro de Produtos", "Controle de Garantias"] },
    { icon: <FaCogs className="h-10 w-10 text-default-blue animate-none" />, title: "Venda de Móveis", contains: ["Gestão de Estoque", "Gestão de Vendas", "Cadastro de Modelos", "Atendimento ao Cliente"] },
    { icon: <FaIndustry className="h-10 w-10 text-default-blue animate-none" />, title: "Indústrias", contains: ["Gestão de Produção", "Controle de Qualidade", "Gestão de Estoque", "Planejamento de Produção"] },
    { icon: <FaBroom className="h-10 w-10 text-default-blue animate-none" />, title: "Produtos de Limpeza", contains: ["Gestão de Estoque", "Gestão de Vendas", "Cadastro de Fornecedores", "Controle de Qualidade"] },
    { icon: <FaTruck className="h-10 w-10 text-default-blue animate-none" />, title: "Distribuidoras", contains: ["Gestão de Estoque", "Gestão de Compras", "Cadastro de Fornecedores", "Logística de Distribuição"] }
];

const Erp = () => {
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <section className="bg-gradient-to-r from-blue-900 to-cyan-500">
                <div className="mx-auto max-w-7xl pt-[120px] xl:pt-0">
                    <article className="px-4 xl:px-0 min-h-screen flex flex-col xl:flex-row xl:items-center justify-between text-white">
                        <div>
                            <h1 className="font-medium text-xl xl:text-4xl xl:w-[600px]">Transforme seu negócio com uma solução empresarial <strong className="font-bold">sob medida</strong>. </h1>
                            <p className="mt-2 xl:w-[750px]">Nossa solução fornece funcionalidades customizadas conforme sua demanda, além de possuir os módulos de <strong>estoque, financeiro, vendas, compras, fiscal, produção, serviços, logística e RH.</strong></p>
                            <Link className="py-2 px-4 rounded-md bg-green-700/80 hover:shadow-xl hover:bg-green-700 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                                <FaWhatsapp className="h-8 w-8" />
                                Solicite um orçamento via WhatsApp
                            </Link>
                        </div>
                        <Image className="filter contrast-200 mt-12 xl:mt-0" src="/assets/images/integration.webp" alt="" width={400} height={300} />
                    </article>
                </div>
                <article className="px-4 bg-gradient-to-r from-gray-300 to-gray-50 py-[60px]">
                    <h1 className="text-default-blue text-4xl font-semibold text-center mb-10">Módulos Dedicados</h1>
                    <div className="mx-auto max-w-7xl grid-cols-1 md:grid-cols-2 grid xl:grid-cols-4 gap-6">
                        {dedicatedModules.map((module, index) => (
                            <div key={index} className="w-full h-full bg-gray-50 p-4 border border-gray-400" style={{ boxShadow: "8px 8px 0px 0px #01588e" }}>
                                {module.icon}
                                <h2 className="font-bold text-default-blue text-xl my-3">{module.title}</h2>
                                {module.description}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <Link className="py-2 px-4 rounded-md text-white bg-green-700 hover:shadow-xl hover:bg-green-700/90 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                            <FaWhatsapp className="h-8 w-8" />
                            Quero receber um orçamento
                        </Link>
                    </div>
                </article>
                <article className="bg-gradient-to-r from-gray-900 to-gray-700 py-[60px]">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-lg text-blue-500 font-semibold pl-4 xl:pl-0">Customizações</h1>
                        <div className="flex px-4 xl:px-0 flex-col xl:flex-row xl:items-center xl:justify-between">
                            <div className="text-white">
                                <h1 className="font-medium text-xl xl:text-4xl xl:w-[600px]">Podemos criar funcionalidades específicas <strong className="font-bold">para o seu negócio</strong>. </h1>
                                <p className="mt-2 xl:w-[750px]">Nossa solução fornece funcionalidades customizadas conforme sua demanda, além de possuir os módulos de <strong>estoque, financeiro, vendas, compras, fiscal, produção, serviços, logística e RH.</strong></p>
                                <Link className="py-2 px-4 rounded-md text-white bg-green-700 hover:shadow-xl hover:bg-green-700/90 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                                    <FaWhatsapp className="h-8 w-8" />
                                    Quero receber um orçamento
                                </Link>
                            </div>
                            <div className="pt-12 w-full">
                                <div className="bg-white rounded-md w-full h-8 mb-4"></div>
                                <div className="rounded-xl bg-white p-4 w-full xl:w-[500px] h-[300px] flex gap-4 shadow-xl">
                                    <div className="bg-default-blue w-8 rounded-lg h-full"></div>
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="bg-black/80 w-full rounded-lg h-8"></div>
                                        <div className="flex items-center w-full gap-6">
                                            <div className="w-full flex flex-col gap-4">
                                                <div className="bg-black/30 w-full rounded-md h-4"></div>
                                                <div className="bg-black/30 w-full rounded-md h-4"></div>
                                            </div>
                                            <PaintBucket className="text-default-blue h-16 w-16" />
                                        </div>
                                        <div className="bg-default-blue w-full rounded-md h-[69px] flex items-center justify-start p-4">
                                            <Image width={160} height={40} src="/assets/images/th-solucoes-logo1.png" alt="" />
                                        </div>
                                        <div className="bg-black/80 w-full rounded-md h-[69px]"></div>
                                    </div>
                                </div>
                                <div className="bg-black/80 rounded-md w-full h-8 mt-4"></div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="px-4 py-[60px]">
                    <h1 className="text-white text-4xl font-semibold text-center mb-10">Segmentos em que atuamos</h1>
                    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3">
                        {segments.map((module, index) => (
                            <Accordion className="p-4" key={index} type="single" collapsible>
                                <AccordionItem className="bg-white rounded-md" value="item-1">
                                    <AccordionTrigger className="flex items-center gap-2 p-4">
                                        {module.icon}
                                        {module.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="p-4">
                                        <ul>
                                            {module.contains.map((submodule, i) => {
                                                return (
                                                    <li className="list-disc ml-4" key={i}>{submodule}</li>
                                                )
                                            })}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <Link className="py-2 px-4 rounded-md text-white bg-green-700 hover:shadow-xl hover:bg-green-700/90 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                            <FaWhatsapp className="h-8 w-8" />
                            Quero receber um orçamento
                        </Link>
                    </div>
                </article>
                <article className="px-4 bg-gradient-to-r from-gray-300 to-gray-50 py-[60px]">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-lg font-semibold pl-4 xl:pl-0">Nossos Planos</h1>
                        <div className="flex px-4 xl:px-0 flex-col xl:flex-row xl:items-center">
                            <div className="text-black">
                                <h1 className="font-medium text-xl xl:text-4xl xl:w-[600px]">Podemos montar um plano para o seu negócio <strong className="font-bold">como quiser</strong>. </h1>
                                <p className="mt-2 xl:w-[750px]">Basta nos mostrar quais os módulos desejados e, caso não possua algo adequado para suas necessidades, podemos criar as funcionalidades específicas customizadas.</p>
                                <Link className="py-2 px-4 rounded-md text-white bg-green-700 hover:shadow-xl hover:bg-green-700/90 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                                    <FaWhatsapp className="h-8 w-8" />
                                    Quero receber um orçamento
                                </Link>
                            </div>
                        </div>
                        <PricingSection />
                    </div>
                </article>
            </section>
        </MainLayout>
    )
}

export default Erp;
