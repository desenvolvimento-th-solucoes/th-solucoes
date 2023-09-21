type Props = {
    children: React.ReactNode;
    label: string;
    defaultTextColor: string;
    hoverTextColor?: string;
    backgroundColor?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export const ButtonRoot = ({ children, label, defaultTextColor, hoverTextColor, onClick, backgroundColor }: Props) => {
    return (
        <button className="group flex items-center relative" onClick={onClick}>
            { children }
            <p className={`${defaultTextColor} ${backgroundColor} text-left font-medium text-sm ml-12 z-10 ${hoverTextColor} pr-4`}>{ label }</p>
        </button>
    )
} 