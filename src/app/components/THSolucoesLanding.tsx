"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import MainLayout from "@/layouts/App";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaHospital,
  FaLaptop,
  FaNetworkWired,
  FaPhoneAlt,
  FaShieldAlt,
  FaWhatsapp,
} from "react-icons/fa";

const WHATSAPP_NUMBER = "5519910005366";

const services = [
  {
    number: "01",
    icon: FaNetworkWired,
    title: "Outsourcing, Suporte & Infraestrutura",
    description:
      "Estrutura técnica para manter computadores, rede e servidores disponíveis para a equipe.",
    items: ["Helpdesk e manutenção", "Rede e Wi-Fi corporativo", "Servidores Windows e Linux", "Switches, fibra e monitoramento"],
    tag: "Recorrência",
  },
  {
    number: "02",
    icon: FaShieldAlt,
    title: "Segurança, Firewall & Backup",
    description:
      "Proteção digital e física para dados, acessos, equipamentos e continuidade operacional.",
    items: ["Firewall e proteção anti-hacker", "Backup local e em nuvem", "Alta disponibilidade", "CFTV e controle de acesso"],
    tag: "Risco",
  },
  {
    number: "03",
    icon: FaPhoneAlt,
    title: "PABX IP & E-mail Corporativo",
    description:
      "Comunicação profissional para equipes, setores, filiais, atendimento e mobilidade.",
    items: ["PABX IP e ramal no celular", "Voz, vídeo e reuniões", "E-mail corporativo por setor", "Antispam e ActiveSync"],
    tag: "Comunicação",
  },
  {
    number: "04",
    icon: FaCode,
    title: "Software, ERP & Integrações",
    description:
      "Sistemas adaptados ao processo da empresa, com desenvolvimento, gestão e integração.",
    items: ["Software sob medida", "ERP, TH ERP e Totvs", "Websites e personalizações", "Integrações e relatórios"],
    tag: "Evolução",
  },
  {
    number: "05",
    icon: FaHospital,
    title: "THPACS para Imagens Médicas",
    description:
      "Plataforma para centralizar, armazenar, gerenciar e disponibilizar imagens médicas em hospitais, clínicas e centros de diagnóstico.",
    items: ["Exames em padrão DICOM", "Armazenamento em nuvem TH Soluções", "Visualização, laudo e disponibilização", "Integração com sistemas hospitalares"],
    tag: "Saúde",
  },
];

const problems = [
  {
    title: "Equipe parada por falhas",
    text: "Computadores, rede, Wi-Fi ou sistemas indisponíveis criam gargalos para atendimento, vendas e operação.",
  },
  {
    title: "Dados sem proteção suficiente",
    text: "Sem firewall, antivírus e estratégia de backup, informações críticas ficam mais expostas.",
  },
  {
    title: "Suporte só na emergência",
    text: "Depender de um técnico quando algo para dificulta previsibilidade, documentação e continuidade.",
  },
  {
    title: "Tecnologias desconectadas",
    text: "E-mail, telefonia, ERP, servidores e infraestrutura precisam funcionar como um ecossistema.",
  },
];

const steps = [
  ["Diagnosticar", "Mapeamos usuários, rede, servidores, segurança, backup, comunicação, sistemas e gargalos da operação."],
  ["Priorizar", "Identificamos o problema mais urgente e mais importante para a continuidade do negócio."],
  ["Resolver", "Aplicamos a solução adequada em infraestrutura, segurança, comunicação ou sistemas."],
  ["Padronizar", "Organizamos suporte, SLA, monitoramento e documentação para reduzir improvisos."],
  ["Evoluir", "Expandimos a atuação para nuvem, PABX, e-mail, ERP, software, integrações ou THPACS quando fizer sentido."],
];

const faqs = [
  ["A TH Soluções atende apenas empresas com equipe de TI interna?", "Não. A atuação é indicada para empresas que não possuem uma estrutura interna completa de TI e também para operações que precisam complementar sua capacidade técnica."],
  ["Podemos contratar apenas uma solução, como backup ou Wi-Fi?", "Sim. A relação pode começar por uma demanda específica, como suporte, infraestrutura, segurança, backup, PABX IP, e-mail corporativo ou THPACS."],
  ["Quais problemas podem ser avaliados em um diagnóstico?", "Usuários, computadores, rede, Wi-Fi, servidores, segurança, firewall, backup, comunicação, sistemas e gargalos que afetam a operação."],
  ["O que é o THPACS?", "É a solução da TH Soluções para centralização, armazenamento, gerenciamento e disponibilização de imagens médicas de hospitais, clínicas e centros de diagnóstico por imagem."],
  ["Quais modalidades de exame o THPACS pode receber?", "A plataforma permite trabalhar com exames que utilizam o padrão DICOM, como Ressonância Magnética, Tomografia Computadorizada, Raio-X, Ultrassonografia, Mamografia e outras modalidades."],
  ["A TH Soluções trabalha com software e ERP?", "Sim. O portfólio inclui desenvolvimento de software, websites, personalizações, TH ERP, Totvs, integrações, relatórios e sistemas de gestão."],
  ["Como funciona o suporte?", "O suporte publicado utiliza helpdesk por chamado e SLA. O atendimento comercial informado é das 08h às 18h, com resposta a novo chamado em até 1 dia útil."],
];

export default function THSolucoesLanding() {
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const fields: [string, string][] = [
      ["Nome", "nome"],
      ["Empresa", "empresa"],
      ["WhatsApp", "whatsapp"],
      ["E-mail", "email"],
      ["Cidade/UF", "cidade"],
      ["Necessidade", "necessidade"],
      ["Desafio", "mensagem"],
    ];
    const lines = ["Olá! Vim pelo site da TH Soluções e gostaria de solicitar um diagnóstico de TI."];
    for (const [label, name] of fields) {
      const value = String(data.get(name) ?? "").trim();
      if (value) lines.push(`${label}: ${value}`);
    }

    setSending(true);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSending(false);
  }

  return (
    <MainLayout typeOfButtonInteraction={1}>
      <main id="topo" className="min-h-screen overflow-hidden bg-white text-slate-700">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 text-white sm:py-28 lg:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/70 via-slate-950 to-slate-950" />
          <div className="absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl sm:h-96 sm:w-96" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="mt-10 mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-cyan-200 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-cyan-300" /> Infraestrutura • Segurança • Software
              </p>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Quando a TI para, a empresa para junto. <span className="text-cyan-300">Mantenha sua operação em movimento.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A TH Soluções integra infraestrutura, segurança, nuvem, comunicação e sistemas para empresas que dependem de rede, computadores, servidores e dados para trabalhar.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contato" className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-300">
                  Solicitar diagnóstico de TI <FaArrowRight />
                </a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:border-green-600 hover:bg-white/5">
                  <FaWhatsapp className="text-xl text-green-400" /> Falar pelo WhatsApp
                </a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                {["Suporte com helpdesk e SLA", "Tecnologia para a operação real", "Infraestrutura e sistemas integrados"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2"><FaCheckCircle className="text-cyan-300" /> {item}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur sm:p-7">
                <FaNetworkWired className="mb-5 text-3xl text-cyan-300" />
                <p className="text-lg font-bold text-white">Infraestrutura</p><p className="mt-2 text-sm leading-6 text-slate-300">Rede, Wi-Fi, servidores e computadores.</p>
              </div>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur sm:p-7">
                <FaShieldAlt className="mb-5 text-3xl text-cyan-300" />
                <p className="text-lg font-bold text-white">Segurança</p><p className="mt-2 text-sm leading-6 text-slate-300">Firewall, backup e controle de acesso.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur sm:p-7">
                <FaCloud className="mb-5 text-3xl text-cyan-300" />
                <p className="text-lg font-bold text-white">Nuvem</p><p className="mt-2 text-sm leading-6 text-slate-300">Dados e serviços para acompanhar sua operação.</p>
              </div>
              <div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6 backdrop-blur sm:p-7">
                <FaCode className="mb-5 text-3xl text-cyan-300" />
                <p className="text-lg font-bold text-white">Sistemas</p><p className="mt-2 text-sm leading-6 text-slate-300">Software, ERP e integrações.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Uma empresa. Quatro frentes de continuidade.</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Tecnologia conectada ao dia a dia do negócio.</h2>
              <p className="mt-5 leading-8 text-slate-600">Do suporte à segurança, dos sistemas à gestão de imagens médicas, organizamos a tecnologia para dar suporte à operação.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [FaNetworkWired, "Infraestrutura", "Rede, Wi-Fi, servidores, computadores, fibra e suporte para a operação."],
                [FaShieldAlt, "Segurança", "Firewall, antivírus, backup, câmeras e controle de acesso."],
                [FaCode, "Sistemas", "Software, ERP, integrações e websites."],
                [FaHospital, "THPACS", "Monitoramento e gestão de imagens médicas."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof FaLaptop;
                return <article key={String(title)} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <IconComponent className="text-3xl text-cyan-700" />
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{String(text)}</p>
                </article>;
              })}
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl bg-slate-50 p-6 sm:grid-cols-3 sm:p-8">
              <div><p className="font-bold text-slate-950">Helpdesk por chamado</p><p className="mt-1 text-sm text-slate-600">Atendimento organizado para demandas de suporte.</p></div>
              <div><p className="font-bold text-slate-950">SLA de atendimento</p><p className="mt-1 text-sm text-slate-600">Resposta a novo chamado em até 1 dia útil.</p></div>
              <div><p className="font-bold text-slate-950">Base em Mogi Mirim</p><p className="mt-1 text-sm text-slate-600">Presença física no interior de São Paulo.</p></div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section id="desafios" className="bg-slate-50 px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">O custo do improviso</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Problemas de TI viram problemas de negócio. E afetam toda a operação.</h2>
              <p className="mt-5 leading-8 text-slate-600">A empresa não precisa esperar uma falha grave para organizar sua tecnologia. Rede instável, equipamentos sem padrão e backup sem revisão já comprometem produtividade e segurança.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem) => <article key={problem.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <span className="mb-4 block h-1 w-12 rounded-full bg-cyan-500" />
                <h3 className="text-lg font-bold text-slate-950">{problem.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{problem.text}</p>
              </article>)}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="solucoes" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Portfólio TH Soluções</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Cinco portas de entrada. Uma TI preparada para crescer com a empresa.</h2>
              <p className="mt-5 leading-8 text-slate-600">A TH Soluções atua desde a necessidade urgente de suporte até projetos de segurança, comunicação, software, gestão e imagens médicas.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return <article key={service.number} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
                  <div className="flex items-center justify-between"><span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-800">{service.tag}</span><span className="text-sm font-bold text-slate-300">{service.number}</span></div>
                  <Icon className="mt-6 text-3xl text-cyan-700" />
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">{service.items.map((item) => <li key={item} className="flex gap-2"><FaCheckCircle className="mt-1 shrink-0 text-cyan-700" />{item}</li>)}</ul>
                  <a href="#contato" className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-800 hover:text-cyan-600">Conversar sobre esta solução <FaArrowRight /></a>
                </article>;
              })}
            </div>
          </div>
        </section>

        {/* PACS */}
        <section className="bg-slate-950 px-4 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">THPACS + Nuvem TH Soluções</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Imagens médicas não são só arquivos. São um acervo assistencial que precisa permanecer acessível.</h2>
              <p className="mt-5 leading-8 text-slate-300">O THPACS conecta o ciclo da imagem médica, da modalidade ao armazenamento, visualização, laudo e disponibilização, com estrutura dimensionada conforme o projeto e a necessidade da instituição.</p>
              <a href="#contato" className="mt-7 inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300">Conhecer o THPACS <FaArrowRight /></a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Modalidades DICOM", "Ressonância Magnética, Tomografia Computadorizada, Raio-X, Ultrassonografia, Mamografia e outras modalidades."],
                ["Centralização do histórico", "Organização para facilitar o acesso das equipes autorizadas ao histórico de exames do paciente."],
                ["Armazenamento de longo prazo", "Infraestrutura própria de nuvem para apoiar a guarda estruturada do acervo ao longo dos anos."],
                ["Segurança e continuidade", "O projeto pode contemplar backup, redundância, controle de acesso, disponibilidade e recuperação de dados."],
              ].map(([title, text]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[.05] p-5"><h3 className="font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-300">{text}</p></article>)}
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="como-funciona" className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Tecnologia com direção</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Nem apagar incêndios. Nem comprar tecnologia sem estratégia. É hora de estruturar a TI.</h2>
              <p className="mt-5 leading-8 text-slate-600">A tecnologia precisa acompanhar o ritmo da operação, reduzir riscos e permitir que a empresa foque no próprio negócio.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map(([title, text], index) => <article key={title} className="relative rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-700 font-extrabold text-white">{index + 1}</span>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>)}
            </div>
          </div>
        </section>

        {/* Audience */}
        <section className="bg-cyan-50 px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-800">Para quem depende de tecnologia</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">A operação da sua empresa cresceu. A TI acompanhou esse crescimento?</h2>
              <p className="mt-5 leading-8 text-slate-700">A TH Soluções atende empresas que dependem de computadores, conectividade, sistemas, atendimento e dados, mas não contam com uma estrutura interna completa de TI.</p>
              <div className="mt-6 flex flex-wrap gap-2">{["Indústrias", "Distribuidores", "Atacadistas", "Escritórios", "Clínicas", "Hospitais", "Diagnóstico por imagem", "Escolas", "Construtoras", "Engenharia", "Logística", "Serviços empresariais"].map((name) => <span key={name} className="rounded-full border border-cyan-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">{name}</span>)}</div>
            </div>
            <div className="space-y-4">
              {[
                ["Proprietários e diretoria", "Para quem busca produtividade, segurança e menos dependência de improvisos."],
                ["Financeiro e administrativo", "Para quem precisa de previsibilidade de custo, contratos e menos chamados emergenciais."],
                ["Operações e infraestrutura", "Para quem precisa manter Wi-Fi, câmeras, telefonia, conectividade e equipes funcionando."],
              ].map(([title, text]) => <div key={title} className="rounded-2xl bg-white p-6 shadow-sm"><h3 className="font-bold text-slate-950">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{text}</p></div>)}
              <blockquote className="rounded-2xl bg-slate-950 p-6 text-white"><p className="text-xl font-bold">“A melhor TI é a que não vira problema para a empresa.”</p><footer className="mt-3 text-sm text-slate-300">Tecnologia organizada para apoiar o negócio, e não desviar o foco dele.</footer></blockquote>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Dúvidas frequentes</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Antes de contratar TI, entenda por onde começar.</h2>
              <p className="mt-5 leading-8 text-slate-600">Se a sua empresa sente que a tecnologia ficou improvisada, ou precisa estruturar o acervo de imagens médicas, o primeiro passo é entender riscos e gargalos.</p>
              <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white"><p className="font-bold">Ainda com dúvida?</p><p className="mt-2 text-sm leading-6 text-slate-300">Envie a sua pergunta: a resposta vem direto no WhatsApp.</p><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 font-bold text-green-500"><FaWhatsapp /> Conversar no WhatsApp</a></div>
            </div>
            <div className="space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-xl border border-slate-200 bg-white p-5 open:border-cyan-300 open:bg-cyan-50/40"><summary className="cursor-pointer list-none pr-8 font-bold text-slate-950 marker:hidden">{question}<span className="float-right text-cyan-700 transition group-open:rotate-45">＋</span></summary><p className="mt-4 text-sm leading-7 text-slate-600">{answer}</p></details>)}</div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-cyan-700 to-sky-800 px-4 py-14 text-white sm:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-100">Próximo passo</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">Sua empresa não precisa esperar a próxima parada. Vamos avaliar sua TI?</h2><p className="mt-4 max-w-2xl leading-7 text-cyan-50">Conte qual área mais preocupa sua operação hoje e receba direcionamento para o próximo passo.</p></div>
            <a href="#contato" className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-50">Solicitar diagnóstico <FaArrowRight /></a>
          </div>
        </section>

        {/* Contact */}
        <section id="contato" className="bg-slate-50 px-4 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-700">Fale com a TH Soluções</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Transforme uma dor de TI em um plano de ação para a operação.</h2>
              <p className="mt-5 leading-8 text-slate-600">Preencha os dados essenciais e o WhatsApp abrirá com sua solicitação organizada para iniciar a conversa sobre a necessidade da sua empresa.</p>
              <div className="mt-8 space-y-5">
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-xl text-green-700"><FaWhatsapp /></span><span><strong className="block text-slate-950">WhatsApp (19) 91000-5366</strong><span className="text-sm text-slate-600">Atendimento comercial das 08h às 18h.</span></span></a>
                <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-800"><FaEnvelope /></span><span><strong className="block text-slate-950">Suporte por chamado</strong><span className="text-sm text-slate-600">Resposta a novo chamado em até 1 dia útil.</span></span></div>
                <div className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl text-cyan-800"><FaLaptop /></span><span><strong className="block text-slate-950">Base física</strong><span className="text-sm text-slate-600">Mogi Mirim/SP.</span></span></div>
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"><p className="font-bold text-slate-950">O que acontece depois</p><ol className="mt-4 space-y-3 text-sm text-slate-600">{["Você informa o principal desafio da empresa.", "O WhatsApp abre com os dados preenchidos.", "A conversa avança para entender a melhor frente de atuação."].map((item, index) => <li key={item} className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-900">{index + 1}</span>{item}</li>)}</ol></div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="text-2xl font-extrabold text-slate-950">Solicite um diagnóstico</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Informe sua necessidade e inicie a conversa pelo WhatsApp.</p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-slate-700">Seu nome *<input required name="nome" autoComplete="name" placeholder="Como podemos chamar você?" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
                <label className="block text-sm font-semibold text-slate-700">Nome da empresa *<input required name="empresa" autoComplete="organization" placeholder="Nome da empresa" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
                <label className="block text-sm font-semibold text-slate-700">WhatsApp *<input required name="whatsapp" type="tel" autoComplete="tel" placeholder="(11) 99999-9999" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
                <label className="block text-sm font-semibold text-slate-700">E-mail *<input required name="email" type="email" autoComplete="email" placeholder="voce@empresa.com.br" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
                <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">Cidade / UF<input name="cidade" placeholder="Ex.: Mogi Mirim / SP" className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
                <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">O que sua empresa precisa?
                  <select name="necessidade" defaultValue="" className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"><option value="" disabled>Selecione uma área</option><option>Suporte e infraestrutura</option><option>Rede e Wi-Fi</option><option>Firewall, segurança e backup</option><option>PABX IP e e-mail corporativo</option><option>Software, ERP e integrações</option><option>THPACS e imagens médicas</option><option>Outro assunto</option></select>
                </label>
                <label className="block text-sm font-semibold text-slate-700 sm:col-span-2">Conte brevemente o desafio<textarea name="mensagem" rows={4} placeholder="Descreva o que está acontecendo ou o que deseja melhorar..." className="mt-2 w-full resize-y rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100" /></label>
              </div>
              {formError && <p role="alert" className="mt-4 text-sm text-red-600">{formError}</p>}
              <button type="submit" disabled={sending} className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-green-800 disabled:cursor-wait disabled:opacity-70"><FaWhatsapp className="text-xl text-green-400" /> {sending ? "Abrindo WhatsApp..." : "Abrir conversa no WhatsApp"}</button>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">Ao enviar, você será direcionado ao WhatsApp da TH Soluções com as informações preenchidas.</p>
            </form>
          </div>
        </section>
        <div className="w-full border-t border-cyan-500" />
      </main>
    </MainLayout>
  );
}
