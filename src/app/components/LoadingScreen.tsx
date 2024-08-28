type Props = {
    enable: boolean;
    destroy: boolean;
}

export const LoadingScreen = ({ enable, destroy }: Props) => {
    return (
        <div className={`${enable ? 'fade-in' : 'fade-out'} ${destroy && 'hidden'} flex items-center justify-center h-screen w-screen fixed z-50 dark:bg-black/80 bg-white/80 inset-0`} aria-label="Aguarde, estamos carregando o conteúdo para você...">
            <div className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
        </div>
    )
}