import Link from "next/link";
import { BsCashStack } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaStore, FaIndustry } from "react-icons/fa";

const pricingPlans = [
    {
        title: "Plano Básico",
        icon: <BsCashStack className="h-8 w-8 text-default-blue" />,
        modules: [
            "NF-e, CT-e, NFC-e,...",
            "Gestão financeira",
            "Gestão de estoque e compras",
            "PDV Online e Offline",
            "Suporte por email, chat",
            "~~Implantação especializada~~",
            "~~CRM e Força de Vendas~~",
            "~~Relatórios personalizados~~",
            "~~Facilitador do SPED e Bloco K~~",
            "~~Gestão de produção~~",
            "~~Suporte por Telefone~~"
        ],
        description: "Ideal para pequenas empresas que buscam controlar estoque, finanças e vendas com eficiência.",
        link: "https://api.whatsapp.com/send/?phone=5519910005366&text=Quero+contratar+o+Plano+Básico&type=phone_number&app_absent=0",
    },
    {
        title: "Plano Intermediário",
        icon: <FaStore className="h-8 w-8 text-default-blue" />,
        modules: [
            "NF-e, CT-e, NFC-e,...",
            "Gestão financeira",
            "Gestão de estoque e compras",
            "PDV Online e Offline",
            "Suporte por email, chat",
            "Implantação especializada",
            "CRM e Força de Vendas",
            "Relatórios personalizados",
            "Facilitador do SPED e Bloco K",
            "~~Gestão de produção~~",
            "~~Suporte por Telefone~~"
        ],
        description: "Para empresas de médio porte que precisam de integrações e um controle mais robusto sobre processos.",
        link: "https://api.whatsapp.com/send/?phone=5519910005366&text=Quero+contratar+o+Plano+Intermediário&type=phone_number&app_absent=0",
    },
    {
        title: "Plano Avançado",
        icon: <FaIndustry className="h-8 w-8 text-default-blue" />,
        modules: [
            "NF-e, CT-e, NFC-e,...",
            "Gestão financeira",
            "Gestão de estoque e compras",
            "PDV Online e Offline",
            "Suporte por email, chat",
            "Implantação especializada",
            "CRM e Força de Vendas",
            "Relatórios personalizados",
            "Facilitador do SPED e Bloco K",
            "Gestão de produção",
            "Suporte por Telefone"
        ],
        description: "Para empresas grandes que necessitam de um conjunto completo de módulos, incluindo produção e relatórios avançados.",
        link: "https://api.whatsapp.com/send/?phone=5519910005366&text=Quero+contratar+o+Plano+Avançado&type=phone_number&app_absent=0",
    },
];

const PricingSection = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-default-blue mt-4 mb-8">Escolha o seu Plano</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start bg-white p-6 border border-gray-200 rounded-lg shadow-lg"
                        >
                            <div className="flex justify-center mb-4">
                                {plan.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-default-blue">{plan.title}</h3>
                            <ul className="mt-4">
                                {plan.modules.map((module, idx) => (
                                    <li key={idx}>
                                       {!module.startsWith('~~') && <span className="text-default-blue">{module.replace(/~~/g, "")}</span>}
                                       {module.startsWith('~~') &&  <s className="text-gray-400">{module.replace(/~~/g, "")}</s>}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-600 mt-4">{plan.description}</p>
                            <div className="mt-6">
                                <Link
                                    href={plan.link}
                                    className="py-2 px-4 rounded-md bg-green-700 text-white hover:bg-green-600 transition-all flex items-center gap-2 text-lg font-semibold"
                                >
                                    <FaWhatsapp className="h-6 w-6" />
                                    Falar com nosso time
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
