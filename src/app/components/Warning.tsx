import { RiCloseFill } from "react-icons/ri";

type Props = {
    show: boolean;
    message: string;
    icon: React.ReactElement;
    contextColor: string;
    onClick: () => void;
}

export const Warning = ({ show, message, icon, onClick, contextColor }: Props) => {
    return (
        <div className="fixed w-screen flex justify-center z-40 top-0">
            <div className={`shadow-xl w-screen bg-white absolute h-20 top-0 transition-all duration-slow py-4 lg:w-max rounded-none lg:rounded-lg ${show ? "mt-0" : "-mt-24"} flex items-center justify-center`}>
                <div className={`h-full w-3 ${contextColor && `bg-${contextColor}`} absolute top-0 bottom-0 left-0 lg:rounded-tl-lg lg:rounded-bl-lg`}></div>
                <p className={`${contextColor && `text-${contextColor}`} text-center flex items-center gap-3 ml-6 whitespace-nowrap`}>
                    {icon}
                    {message}
                </p>
                <div className="text-gray-400 cursor-pointer mr-6 ml-3" onClick={onClick}>
                    <RiCloseFill className="text-3xl" />
                </div>
            </div>
        </div>
    )
}