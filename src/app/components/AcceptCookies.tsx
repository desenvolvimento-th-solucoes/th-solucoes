import { ButtonDefault } from "./button/ButtonDefault"

type Props = { 
    hidden: boolean;
    handleDeny: () => void;
    handleAllow: () => void;
}

export const AcceptCookies = ({ hidden = true, handleAllow, handleDeny }: Props) => {
    return (
        <div className={`z-30 bg-white transition-all w-screen md:max-w-md fixed bottom-0 md:bottom-5 md:right-5 rounded-lg p-6 shadow-lg shadow-gray-800 ${hidden && "-mb-96"} ${!hidden && "-mb-0"}`}>
            <h1 className="text-xl font-bold">Este site utiliza cookies</h1>
            <p className="mt-4 mb-6 text-justify">Usamos cookies para analisar o tráfego do site e otimizar sua experiência nele. Ao aceitar nosso uso de cookies, seus dados serão agregados com os dados de todos os demais usuários.</p>
            <div className="flex items-center gap-4">
                <ButtonDefault label="Recusar" flexible={true} loadder={false} onClick={handleDeny} />
                <ButtonDefault label="Aceitar" flexible={true} loadder={false} onClick={handleAllow} />
            </div>
        </div>
    )
}