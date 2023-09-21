type Props = {
    title: string;
    message: string;
    icon: React.ReactElement | null;
    contextButtonColor: string;
    contextBorderColor: string;
    show: boolean;
    options?: boolean;
    labelOption1?: string;
    labelOption2?: string;
    onClick?: () => void;
    onClickFirstOption?: () => void;
    onClickSecondOption?: () => void;
}

export const Modal = ({ title, message, icon, contextButtonColor, contextBorderColor, labelOption1, labelOption2, show, options, onClick, onClickFirstOption, onClickSecondOption }: Props) => {
    return (
        <div className={`w-screen h-screen bg-black/80 fixed inset-0 transition-all overflow-y-auto z-40 flex items-center justify-center ${!show && "hidden"} ${show && "block"}`}>
            <div className="h-screen lg:h-max bg-white lg:rounded-lg p-3 md:p-10 flex flex-col justify-center items-center w-screen lg:max-w-lg">
                <div className={`border-4 ${contextBorderColor} rounded-full p-8 flex items-center justify-center mb-4`}>
                    { icon }
                </div>
                <h1 className="text-2xl md:text-5xl font-semibold text-gray-900 mb-4 text-center">{ title }</h1>
                <p className="text-md md:text-xl text-gray-500 text-center">{ message }</p>
                {options ? (
                    <div className="flex gap-6 items-center flex-row">
                        <button 
                            onClick={onClickFirstOption} 
                            className={`mt-5 py-1 px-3 text-md md:py-3 md:px-6 text-white rounded-lg md:text-2xl font-semibold ${contextButtonColor}`}>{ labelOption1 }</button>
                        <button 
                            onClick={onClickSecondOption} 
                            className={`mt-5 py-1 px-3 text-md md:py-3 md:px-6 text-white rounded-lg md:text-2xl font-semibold bg-gray-400`}>{ labelOption2 }</button>
                    </div>
                ) : (
                    <button 
                        onClick={onClick} 
                        className={`mt-5 py-1 px-3 text-md md:py-3 md:px-6 text-white rounded-lg md:text-2xl font-semibold ${contextButtonColor}`}>OK</button>
                )}
            </div>
        </div>
    )
}