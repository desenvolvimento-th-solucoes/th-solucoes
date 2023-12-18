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
        <div className={`fixed w-screen flex justify-center z-40 bottom-0 right-0 transition-all ${show ? "mr-0" : "-mr-20"}`}>
            <div className={`shadow-2xl w-screen bg-red-500 absolute h-20 bottom-4 right-4 transition-all duration-slow py-4 lg:w-max rounded-none lg:rounded-lg ${show ? "mr-0" : "-mr-96"} flex items-center justify-center`}>
                <div className={`h-full w-3 ${contextColor && `bg-${contextColor}`} absolute top-0 bottom-0 left-0 lg:rounded-tl-lg lg:rounded-bl-lg`}></div>
                <p className={`${contextColor && `text-${contextColor}`} text-center flex items-center gap-3 ml-6 whitespace-nowrap`}>
                    {icon}
                    {message}
                </p>
                <div className="text-gray-400 cursor-pointer mr-6 ml-3" onClick={onClick}>
                    <RiCloseFill className="text-3xl text-white" />
                </div>
            </div>
        </div>
    )
}