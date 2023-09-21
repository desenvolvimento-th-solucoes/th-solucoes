type Props = { 
    icon: React.ReactNode; 
    color: string;
    backgroundColor?: string;
}

export const ButtonIcon = ({ icon, color, backgroundColor }: Props) => {
    return (
        <div className={`flex items-center justify-center mr-3 w-10 h-10 rounded-xl absolute ${backgroundColor} ${color} group-hover:w-full transition-all`}>      
            { icon }
        </div>
    )
}