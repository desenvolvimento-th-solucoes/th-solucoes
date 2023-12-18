import AdministratorLayout from "@/layouts/Administrator"
import { BiPlus } from "react-icons/bi";

const TrainingAdmin = () => {
    return (
        <AdministratorLayout section={1}>
            <div>
                <div>
                    <h1 className="text-4xl font-bold">Treinamentos</h1>
                    <p className="text-gray-500">Inclua relatórios, aulas e materiais referentes aos sistemas da TH Soluções.</p>
                </div>
                <div className="grid grid-cols-3 gap-8 mt-8">
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-default-blue text-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-white text-2xl">TH WEB</h2>
                            <p className="text-white">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-default-black flex items-center justify-center"><BiPlus className="text-white text-2xl" /></button>
                    </span>
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-green-700 text-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-white text-2xl">TH Agro</h2>
                            <p className="text-white">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-default-black flex items-center justify-center"><BiPlus className="text-white text-2xl" /></button>
                    </span>
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-rose-700 text-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-white text-2xl">TH Food</h2>
                            <p className="text-white">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-default-black flex items-center justify-center"><BiPlus className="text-white text-2xl" /></button>
                    </span>
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-default-black text-2xl">TH Clínicas</h2>
                            <p className="text-default-black">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-default-black flex items-center justify-center"><BiPlus className="text-white text-2xl" /></button>
                    </span>
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-indigo-600 text-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-white text-2xl">TH Shop</h2>
                            <p className="text-white">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-default-black flex items-center justify-center"><BiPlus className="text-white text-2xl" /></button>
                    </span>
                    <span className="hover:-translate-y-2 transition-all cursor-pointer flex items-center shadow-xl justify-between p-4 bg-default-black text-white w-full h-max rounded-lg">
                        <div>
                            <h2 className="text-white text-2xl">TH Barbearias e Salões</h2>
                            <p className="text-white">Relatórios, aulas e materiais.</p>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><BiPlus className="text-black text-2xl" /></button>
                    </span>
                </div>
            </div>
        </AdministratorLayout>
    )
}

export default TrainingAdmin;