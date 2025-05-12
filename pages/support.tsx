import MainLayout from "@/layouts/App";
import { ClockArrowUp, FileVideo, MessageCircleQuestion, Radar, Siren } from "lucide-react";
import Link from "next/link";

const Support = () => {
    return (
        <MainLayout typeOfButtonInteraction={1}>
            <div className="pt-[120px] pb-[60px] bg-default-blue">
                <h1 className="text-2xl text-white font-semibold w-full text-center mb-16">Painel de Atendimento</h1>
                <section className="max-w-7xl mx-auto w-full grid grid-cols-1 xl:grid-cols-3 gap-4 px-4 xl:px-0">
                    <article className="flex flex-col bg-white rounded-md border p-4 w-full h-max">
                        <FileVideo className="w-10 h-10 text-default-blue" />
                        <h2 className="text-xl mt-4"><strong>Documentação e instruções</strong> para utilização do TH ERP.</h2>
                        <Link className="my-4 hover:shadow-xl hover:bg-default-blue/90 bg-default-blue rounded-md text-white text-center py-4 px-2 transition-all" href="https://ajuda.aprendaerp.com.br">EAD TH Soluções</Link>
                        <span className="text-center text-default-blue font-semibold">Autoatendimento</span>
                    </article>
                    <article className="flex flex-col bg-white rounded-md border p-4 w-full h-max">
                        <Siren className="w-10 h-10 text-default-blue" />
                        <h2 className="text-xl mt-4">Para <strong>sugestões, reclamações ou questões</strong> complexas.</h2>
                        <Link className="my-4 hover:shadow-xl hover:bg-default-blue/90 bg-default-blue rounded-md text-white text-center py-4 px-2 transition-all" href="/contact#contact-area">Novo Chamado</Link>
                        <span className="text-gray-600 text-center">Resposta em até <strong className="text-default-blue">1 dia útil</strong></span>
                    </article>
                    <article className="flex flex-col bg-white rounded-md border p-4 w-full h-max">
                        <div className="flex justify-between w-full">
                            <MessageCircleQuestion className="w-10 h-10 text-default-blue" />
                            <span className="text-right text-sm">Horário Comercial<br></br>08h00 às 17h00</span>
                        </div>
                        <h2 className="text-xl mt-4">Para <strong>tirar dúvidas de utilização</strong> dos sistemas.</h2>
                        <Link className="my-4 hover:shadow-xl hover:bg-default-blue/90 bg-default-blue rounded-md text-white text-center py-4 px-2 transition-all" href="https://api.whatsapp.com/send/?phone=5519910005366&text&type=phone_number&app_absent=0">Iniciar Chat</Link>
                        <span className="text-default-blue font-semibold text-center">Atendimento Rápido</span>
                    </article>
                    <Link className="xl:col-start-1 xl:col-end-4 my-4 hover:shadow-xl hover:bg-white/90 bg-white rounded-md text-center py-4 px-4 transition-all text-black flex items-center justify-center gap-4" href="https://thsolucoes.suport.systems/"><ClockArrowUp /> Consultar histórico de chamados.</Link>
                </section>
            </div>
        </MainLayout>
    )
}

export default Support;