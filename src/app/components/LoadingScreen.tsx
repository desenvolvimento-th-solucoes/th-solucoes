import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6"

const LoadingScreen = () => {
    const [problem, setProblem] = useState(false);
    
    useEffect(() => {
        setTimeout(() => setProblem(true), 5000);
    }, []);

    return (
        <div className={`bg-black flex-col w-screen h-screen fixed inset-0 flex items-center justify-center z-40 transition-all duration-slow`}>
            <FaSpinner className="text-blue-600 text-6xl animate-spin" />
            <h1 className="text-white text-lg mt-4">Aguarde...</h1>
            {problem && <p className="text-white flex flex-col items-center absolute bottom-2 transition-all">Parece que algo deu errado ☹️<a href="" className="text-blue-600 font-bold">Clique aqui</a></p>}
        </div>
    )
}

export default LoadingScreen;