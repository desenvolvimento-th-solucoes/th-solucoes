import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiBookContent, BiLock } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

type Props = {
    section: number;
}

export const ManagementAside = ({ section }: Props) => {
    const navigate = useRouter();
    const [canShowCompleteInfo, setCanShowCompleteInfo] = useState(false);

    return (
        <aside 
            onMouseOver={() => setCanShowCompleteInfo(true)} 
            onMouseLeave={() => setCanShowCompleteInfo(false)} 
            className="group min-h-screen bg-default-black text-white transition-all w-24 hover:w-1/4 flex p-4 flex-col justify-between">
            {canShowCompleteInfo ? (
                <Link href="/" className="flex justify-center"><img width={200} height={60} src="../../assets/images/th-solucoes-logo1.png" alt="" /></Link>
            ) : (
                <Link href="/" className="flex justify-center"><img width={80} height={80} src="../../assets/images/th-solucoes-logo2.png" alt="" /></Link>
            )}
            <ul className="w-full">
                <li className="w-full"><a onClick={() => navigate.push("/restrict/management/usersAdmin")} className={`${section === 0 && "bg-white text-default-black"} ${!canShowCompleteInfo && "justify-center"} cursor-pointer h-10 text-xl px-4 rounded-lg py-8 my-4 border-y-white flex items-center gap-2 w-full transition-all hover:bg-white hover:text-default-black`}><HiOutlineUserGroup className="text-2xl" />{canShowCompleteInfo && "Usuários"}</a></li>
                <li className="w-full"><a onClick={() => navigate.push("/restrict/management/trainingAdmin")} className={`${section === 1 && "bg-white text-default-black"} ${!canShowCompleteInfo && "justify-center"} cursor-pointer h-10 text-xl px-4 rounded-lg py-8 my-4 border-y-white flex items-center gap-2 w-full transition-all hover:bg-white hover:text-default-black`}><BiBookContent className="text-2xl" />{canShowCompleteInfo && "Treinamentos"}</a></li>
                <li className="w-full"><a onClick={() => navigate.push("/restrict/management/passwordsAdmin")} className={`${section === 2 && "bg-white text-default-black"} ${!canShowCompleteInfo && "justify-center"} cursor-pointer h-10 text-xl px-4 rounded-lg py-8 my-4 border-y-white flex items-center gap-2 w-full transition-all hover:bg-white hover:text-default-black`}><BiLock className="text-2xl" />{canShowCompleteInfo && "Cofre de Senhas"}</a></li>
            </ul>
            <a onClick={() => navigate.push("/")} className="cursor-pointer h-10 text-xl px-4 rounded-lg py-8 my-4 border-y-white flex items-center gap-2 w-full transition-all hover:bg-white hover:text-default-black"><BsArrowLeft className="text-2xl" />{canShowCompleteInfo && "Voltar"}</a>
        </aside>
    )
}