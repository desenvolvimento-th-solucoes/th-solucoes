type Props = {
    onClick?: () => void;
    enable: boolean;
    type: number;
    icon: React.ReactElement;
    location?: string;
}

export const InteractionButton = ({ onClick, enable, icon, type, location }: Props) => {
    return (
        <a href={location} className={`fixed z-30 flex w-screen duration-slow transition-all items-center 
            ${type === 1 && enable && 'mb-0'}
            ${type === 1 && !enable && '-mb-32'}

            ${type === 2 && enable && 'mb-0'}
            ${type === 2 && !enable && '-mt-32'}

            ${type === 1 ? 'justify-end right-8 bottom-8' : ''}
            ${type === 2 ? 'justify-center top-4' : ''}
        `}>
            <button onClick={onClick} className={`
                ${type === 1 && "hover:mb-2"} 
                ${type === 2 && "hover:mt-2"} 
                transition-all p-4 bg-black rounded-xl shadow-md shadow-gray-500 cursor-pointer`}>
                { icon }
            </button>
        </a>      
    )
}