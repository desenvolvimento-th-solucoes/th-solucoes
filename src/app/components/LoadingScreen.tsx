import { FaSpinner } from "react-icons/fa6"

const LoadingScreen = () => {
    return (
        <div className={`bg-black w-screen h-screen fixed inset-0 flex items-center justify-center z-40 transition-all duration-slow pointer-events-none`}>
            <FaSpinner className="text-blue-600 text-6xl animate-spin" />
        </div>
    )
}

export default LoadingScreen;