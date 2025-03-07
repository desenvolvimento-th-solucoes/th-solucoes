import MainLayout from "@/layouts/App";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { PaintBucket } from "lucide-react";
import { BsCashStack } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaFileInvoiceDollar, FaBoxes, FaStore, FaChartLine, FaUsers, FaIndustry } from "react-icons/fa";

const dedicatedModules = [
    {
        icon: <BsCashStack className="h-10 w-10 text-default-blue" />,
        title: "Gestão Financeira Inteligente",
        description: "Gerencie <strong>boletos, cobranças, receitas e despesas</strong> em uma plataforma totalmente integrada. Controle seu fluxo de caixa com <strong>praticidade</strong>, onde e quando quiser."
    },
    {
        icon: <FaFileInvoiceDollar className="h-10 w-10 text-default-blue" />,
        title: "Módulo Fiscal Completo",
        description: "Emita e gerencie todos os seus <strong>documentos fiscais</strong> em um só lugar, com rapidez e facilidade. Gere <strong>NFe, NFCe, CTe, MDFe, SPED Fiscal</strong> e extraia XMLs de todas as notas emitidas sem complicação."
    },
    {
        icon: <FaBoxes className="h-10 w-10 text-default-blue" />,
        title: "Gestão de Estoque Eficiente",
        description: "Controle <strong>múltiplos depósitos</strong>, gerencie compras de insumos e mercadorias por <strong>lote, validade ou número de série</strong>. Utilize funcionalidades avançadas como <strong>cotações online</strong> e cadastro automático via nota de entrada."
    },
    {
        icon: <FaStore className="h-10 w-10 text-default-blue" />,
        title: "Frente de Caixa Integrada",
        description: "Registre <strong>vendas</strong>, emita <strong>NFC-e e CF-e SAT</strong> e tenha integração total com <strong>financeiro e estoque</strong>. Compatível com <strong>leitores de código de barras</strong> e <strong>impressoras não fiscais</strong>, disponível para uso online e offline."
    },
    {
        icon: <FaChartLine className="h-10 w-10 text-default-blue" />,
        title: "Central de Integrações",
        description: "Conecte seu sistema a <strong>múltiplas lojas</strong> em diversas plataformas. Gerencie <strong>operações, estoques, vendas, emissão de notas, pagamentos e entregas</strong> de forma centralizada e eficiente."
    },
    {
        icon: <AiOutlineBarChart className="h-10 w-10 text-default-blue" />,
        title: "Relatórios",
        description: "Acompanhe sua empresa de ponta a ponta, com <strong>relatórios financeiros, de lucratividade, de vendas, de estoque e fiscais</strong> para ajudar na tomada de decisões. E se precisar, você ainda pode <strong>personalizar relatórios específicos</strong> para o seu negócio!"
    },
    {
        icon: <FaUsers className="h-10 w-10 text-default-blue" />,
        title: "CRM e Força de Vendas",
        description: "Visualize <strong>indicadores essenciais</strong> de oportunidades, campanhas e desempenho da equipe de vendas. Utilize <strong>gráficos dinâmicos</strong> para monitorar ações, agendamentos e resultados diários."
    },
    {
        icon: <FaIndustry className="h-10 w-10 text-default-blue" />,
        title: "Gestão de Produção (PCP) Moderna",
        description: "Uma solução intuitiva para <strong>indústrias de qualquer porte</strong>. Gerencie <strong>ordens de produção</strong>, simule processos e atenda às exigências fiscais, incluindo <strong>Bloco K e H do SPED Fiscal</strong>."
    }
];

const Erp = () => {
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <section className="bg-gradient-to-r from-blue-900 to-cyan-500">
                <div className="mx-auto max-w-7xl">
                    <article className="h-screen flex flex-col xl:flex-row items-center justify-between text-white">
                        <div>
                            <h1 className="font-medium text-4xl w-[600px]">Transforme seu negócio com uma solução empresarial <strong className="font-bold">sob medida</strong>. </h1>
                            <p className="mt-2 w-[750px]">Nossa solução fornece funcionalidades customizadas conforme sua demanda, além de possuir os módulos de <strong>estoque, financeiro, vendas, compras, fiscal, produção, serviços, logística e RH.</strong></p>
                            <Link className="py-2 px-4 rounded-md bg-green-700/80 hover:shadow-xl hover:bg-green-700 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                                <FaWhatsapp className="h-8 w-8" />
                                Solicite um orçamento via WhatsApp
                            </Link>
                        </div>
                        <Image className="filter contrast-200" src="/assets/images/integration.webp" alt="" width={400} height={300} />
                    </article>
                </div>
                <article className="bg-gradient-to-r from-gray-300 to-gray-50 py-[60px]">
                    <h1 className="text-default-blue text-4xl font-semibold text-center mb-10">Módulos Dedicados</h1>
                    <div className="mx-auto max-w-7xl grid grid-cols-4 gap-6">
                        {dedicatedModules.map((module, index) => (
                            <div key={index} className="w-full h-full bg-gray-50 p-4 border border-gray-400" style={{ boxShadow: "8px 8px 0px 0px #01588e" }}>
                                {module.icon}
                                <h2 className="font-bold text-default-blue text-xl my-3">{module.title}</h2>
                                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: module.description }}></p>
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
                        <h1 className="text-lg text-blue-500 font-semibold">Customizações</h1>
                        <div className="flex items-center justify-between">
                            <div className="text-white">
                                <h1 className="font-medium text-4xl w-[600px]">Podemos criar funcionalidades específicas <strong className="font-bold">para o seu negócio</strong>. </h1>
                                <p className="mt-2 w-[750px]">Nossa solução fornece funcionalidades customizadas conforme sua demanda, além de possuir os módulos de <strong>estoque, financeiro, vendas, compras, fiscal, produção, serviços, logística e RH.</strong></p>
                                <Link className="py-2 px-4 rounded-md text-white bg-green-700 hover:shadow-xl hover:bg-green-700/90 transition-all w-max flex items-center gap-2 text-lg font-semibold mt-6" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">
                                    <FaWhatsapp className="h-8 w-8" />
                                    Quero receber um orçamento
                                </Link>
                            </div>
                            <div>
                                <div className="bg-white rounded-md w-full h-8 mb-4"></div>
                                <div className="rounded-xl bg-white p-4 w-[500px] h-[300px] flex gap-4 shadow-xl">
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
            </section>
        </MainLayout>
    )
}

export default Erp;
