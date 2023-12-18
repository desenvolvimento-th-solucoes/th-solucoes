import { SubmitProvider } from "@/app/context/SubmitContext";
import { ManagementAside } from "../app/components/ManagementAside";

type Props = {
    children: React.ReactNode;
    section: number;
}

const AdministratorLayout = ({ children, section }: Props) => {
    return (
        <SubmitProvider>
            <main className="w-full h-full flex">
                <ManagementAside section={section} />
                <div className="p-8 w-full">
                    { children }
                </div>
            </main>
        </SubmitProvider>
    )
}

export default AdministratorLayout;