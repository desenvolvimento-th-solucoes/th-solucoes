type Props = {
    text: string;
    textStyle?: string;
    desloc?: string;
    className?: string;
}

export const MinimalCard = ({ text, textStyle, desloc, className }: Props) => {
    return (
        <div className={`h-max w-full bg-white z-30 relative ${desloc} ${className} shadow-xl shadow-gray-400`}>
            <div className="h-full w-2 bg-default-blue absolute left-0"></div>
            <p className={`text-black pl-10 pr-10 text-left py-5 ${textStyle}`}>{ text }</p>
        </div>
    )
}