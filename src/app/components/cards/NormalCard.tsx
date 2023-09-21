import { ButtonMinimal } from "../button/ButtonMinimal";

type Props = {
    icon: React.ReactElement;
    title: string;
    body: string;
    button?: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export const NormalCard = ({ icon, title, body, button, href, onClick, className} : Props) => {
    return(
        <div className={`${className} rounded-xl group relative h-full hover:bg-default-blue hover:-translate-y-3 duration-slow transition-all w-full flex-grow flex flex-col items-center justify-between bg-white shadow-xl shadow-gray-400 rounded-tr-lg rounded-tl-lg`}>
            <div className="p-8">
                <div className="group flex flex-col items-center">
                    <div className="group-hover:bg-white flex items-center justify-center w-20 h-20 rounded-full">
                        { icon }
                    </div>
                    <h2 className="text-2xl text-center font-bold group-hover:text-white">{ title }</h2>
                    <p className="text-center my-4 text-md group-hover:text-white lg:text-lg">{ body }</p>
                </div>
                { button && <a onClick={onClick} href={href}><ButtonMinimal label="Ler mais" textColor="text-default-blue group-hover:text-white" /></a> }
            </div>
            <div className="bg-default-blue h-4 w-full group-hover:bg-white rounded-br-lg rounded-bl-lg"></div>
        </div>
    )
}