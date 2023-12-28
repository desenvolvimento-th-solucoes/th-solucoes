import { BiX } from "react-icons/bi"

export const SpecialMessage = () => {
    return (
        <div className="h-screen w-screen fixed inset-0 z-40 bg-black/30 flex items-center justify-center">
            <div className="w-max h-max bg-white rounded-lg p-10 max-w-lg flex flex-col items-center shadow-xl shadow-gray-800 justify-center relative">
                <div className="absolute top-0 right-0 left-0 h-5 bg-yellow-600 rounded-tr-md rounded-tl-md"></div>
                <img className="w-56" src="/assets/images/th_logo.jpeg" alt="" />
                <button className="absolute right-10 top-10" aria-label="Close Message"><BiX className="text-red-600 w-10 h-10" /></button>
                <div>
                    <h1 className="font-bold text-center text-2xl">Comunicado Especial</h1>
                    <p className="text-justify my-4 tracking-tight text-lg">Ao encerrarmos mais um ano, queremos expressar nossa profunda gratidão pela confiança depositada em nossa parceria. A jornada que compartilhamos em 2023 foi marcada por valores fundamentais: honestidade e transparência.</p>
                    <p className="text-justify my-4 tracking-tight text-lg">Agradecemos por escolherem a TH Soluções como sua parceira em Tecnologia da Informação. Que o próximo ano seja repleto de conquistas e inovações, mantendo sempre os alicerces que construímos juntos.</p>
                    <div className="mt-8">
                        <h1 className="font-bold text-lg">Feliz Ano Novo!</h1>
                        <h2>Atenciosamente, <br /> Equipe TH Soluções</h2>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 left-0 h-5 bg-yellow-600 rounded-br-md rounded-bl-md"></div>
            </div>
        </div>
    )
}