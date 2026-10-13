
"use client";

import { useState } from "react";
import Image from "next/image";


type Campanha = {
  nome: string;
  imagem: string;
  descricao: string;
  significado: string;
};

const campanhas: Record<number, Campanha> = {
  1: {
    nome: "Ano Novo",
    imagem: "/assets/images/ano-novo.png",
     descricao:
    "O Ano Novo celebra o início de um novo ciclo, trazendo a oportunidade de renovar as esperanças, estabelecer objetivos e iniciar novos projetos.",
  significado:
    "O dourado simboliza prosperidade, sucesso e abundância. A mensagem 'Feliz Ano Novo' representa os votos de felicidade, paz, saúde e realizações para o ano que começa.",
},
  5: {
    nome: "Dia das Mães",
    imagem: "/assets/images/dia-das-maes.png",
    descricao:
      "Uma data dedicada a homenagear as mães e reconhecer seu carinho, cuidado e dedicação.",
    significado:
      "Flores e corações são símbolos populares de amor, afeto e gratidão.",
  },

  9: {
    nome: "Setembro Amarelo",
    imagem: "/assets/images/setembro-amarelo.png",
    descricao:
      "Campanha de conscientização sobre a prevenção do suicídio, que incentiva a valorização da vida e a busca por ajuda.",
    significado:
      "A cor amarela simboliza luz, atenção e esperança. O laço amarelo é um dos símbolos utilizados na campanha.",
  },

  10: {
    nome: "Outubro Rosa",
    imagem: "/assets/images/outubro-rosa.png",
    descricao:
      "Campanha de conscientização sobre o câncer de mama, incentivando a informação, a prevenção e o diagnóstico precoce.",
    significado:
      "A cor rosa e o laço rosa são símbolos de apoio à conscientização sobre o câncer de mama.",
  },

  11: {
    nome: "Novembro Azul",
    imagem: "/assets/images/novembro-azul.png",
    descricao:
      "Campanha voltada à saúde do homem, com destaque para a conscientização sobre o câncer de próstata.",
    significado:
      "A cor azul é associada à campanha como símbolo de conscientização e incentivo ao cuidado com a saúde masculina.",
  },

  12: {
    nome: "Natal",
    imagem: "/assets/images/natal.png",
    descricao:
      "O Natal celebra valores como união, solidariedade, generosidade e esperança.",
    significado:
      "A estrela, as luzes e outros símbolos natalinos representam esperança, celebração e união.",
  },
};

export default function CampanhaDoMes() {
  const [aberto, setAberto] = useState(false);

  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = hoje.getMonth() + 1;

  let campanha;

  if (mes === 12 && dia >= 1 && dia <= 25) {
    campanha = campanhas[12]; // Natal
  } else if (
    (mes === 12 && dia >= 26) ||
    (mes === 1 && dia <= 15)
  ) {
    campanha = campanhas[1]; // Ano Novo
  } else {
    campanha = campanhas[mes];
  }
  
  if (!campanha) return null;

  return (
    <section>
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label={`Saiba mais sobre ${campanha.nome}`}
        className="cursor-pointer border-0 bg-transparent p-0"
      >
        <Image
          src={campanha.imagem}
          alt={campanha.nome}
          width={500}
          height={180}
          className="mx-auto mt-2 h-auto w-full max-w-[65px] rounded-lg"
        />
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setAberto(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-campanha"
            className="w-full max-w-lg rounded-xl bg-white p-6 text-gray-900 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar janela"
              className="float-right text-2xl"
            >
              
            </button>

            <h2
              id="titulo-campanha"
              className="mb-4 text-2xl font-bold"
            >
            {campanha.nome}
            </h2>

            <Image
              src={campanha.imagem}
              alt={`Símbolo da campanha ${campanha.nome}`}
              width={600}
              height={250}
              className="mb-4 h-auto max-h-48 w-full rounded-lg object-contain"
            />
            

            <h3 className="mb-1 font-semibold">
              Sobre
            </h3>
            <p className="mb-4">{campanha.descricao}</p>

            <h3 className="mb-1 font-semibold">
              Significado do símbolo
            </h3>
            <p>{campanha.significado}</p>

            <button
              type="button"
              onClick={() => setAberto(false)}
              className="mt-6 rounded-lg bg-gray-900 px-5 py-2 text-white"
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </section>
  );
}