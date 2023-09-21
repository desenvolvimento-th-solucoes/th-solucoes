type Props = {
    children: React.ReactNode;
}

export const MasterMain = ({ children }: Props) => {
    return (
        <div className="w-full h-full">{ children }</div>
    )
}