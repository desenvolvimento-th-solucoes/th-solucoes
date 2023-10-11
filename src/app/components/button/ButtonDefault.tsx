import { BsArrowRepeat } from "react-icons/bs";

type Props = {
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent | undefined>) => void;
    label: string;
    className?: string;
    flexible?: boolean;
    icon?: React.ReactElement;
    loadder: boolean;
    defaultColor?: string;
    hoverColor?: string;
    textColor?: string;
}

export const ButtonDefault = ({ onClick, label, flexible, icon, className, loadder, hoverColor, defaultColor, textColor }: Props) => {
    return (
        <button className={`${className ?? ""} ${loadder && "pointer-events-none"} flex items-center justify-between ${flexible && "w-full"} ${!flexible && "w-max"}  ${defaultColor ?? "bg-default-blue"} ${textColor ?? "text-white"} rounded-xl text-center font-medium z-10 hover:-translate-y-2 transition-all hover:shadow-lg hover:shadow-gray-700 ${hoverColor && "hover:" + hoverColor}`} onClick={onClick}>
            {loadder && (
                <div className={`${loadder ? "animate-spin mx-4" : ""}`}>
                    <BsArrowRepeat className="text-xl text-white" />
                </div>
            )}
            {!loadder && icon && (
                <div className="ml-4">
                    { icon }
                </div>
            )}
            <p className="w-full h-full py-2 pl-5 pr-5">{ loadder && "Aguarde..." }{ !loadder && label }</p>
        </button>
    )
}