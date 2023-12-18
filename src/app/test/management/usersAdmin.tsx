import { managementApi } from "@/app/api/management";
import { Form } from "@/app/components/Form";
import { ModalForm } from "@/app/components/ModalForm";
import { SubmitContext } from "@/app/context/SubmitContext";
import { features } from "@/app/features/features";
import { Fillable } from "@/app/types/Fillable";
import { User } from "@/app/types/User";
import AdministratorLayout from "@/layouts/Administrator";
import { useContext, useEffect, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const usersAdmin = () => {
    const [loading, setLoading] = useState(true);
    const [usersFromAPI, setUsersFromAPI] = useState<User[]>([]);
    const submitContext = useContext(SubmitContext);
    const [showEditForm, setShowEditForm] = useState<boolean>(false);
    const [usersInputs, setUsersInputs] = useState<Fillable[]>([
        { inputId: "adminName", inputValue: "", flexible: false, inputName: "Nome", inputPlaceholder: "ex: Felipe de Castro", inputType: "text", inputAllows: "name" },
        { inputId: "adminTelephone", inputValue: "", flexible: false, inputName: "Telefone", inputPlaceholder: "ex: 19 99988-7766", inputType: "tel", inputAllows: "telephone" },
        { inputId: "adminEmail", inputValue: "", flexible: true, inputName: "Email", inputPlaceholder: "ex: teste@gmail.com", inputType: "email", inputAllows: "email" },
        { inputId: "adminPassword", inputValue: "", flexible: false, inputName: "Senha", inputPlaceholder: "", inputType: "password", inputAllows: "password" },
        { inputId: "adminConfirmPassword", inputValue: "", flexible: false, inputName: "Confirmar Senha", inputPlaceholder: "", inputType: "password", inputAllows: "password" }
    ])

    const performAction = (id: number) => {
        const foundUser = usersFromAPI.find((user) => user.id === id);
        if (foundUser) {
            usersInputs.map((userInput) => {
                if (userInput.inputName === "Nome") userInput.inputValue = foundUser.name;
                if (userInput.inputName === "Telefone") userInput.inputValue = foundUser.telephone;
                if (userInput.inputName === "Email") userInput.inputValue = foundUser.email;
            });
            setShowEditForm(true);
            return;
        }
        return;
    }

    useEffect(() => {
        try {
            const users = async () => setUsersFromAPI(await managementApi.recoverAllUsers());
            users();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <AdministratorLayout section={0}>
            <div>
                <h1 className="text-4xl font-bold">Gerenciamento de Usuários</h1>
                <p className="text-gray-500">Listagem de todos os usuários cadastrados.</p>
            </div>
            <Form
                action={() => {
                    const name = document.querySelector("#adminName") as HTMLInputElement;
                    const email = document.querySelector("#adminEmail") as HTMLInputElement;
                    const telephone = document.querySelector("#adminTelephone") as HTMLInputElement;
                    const password = document.querySelector("#adminPassword") as HTMLInputElement;

                    if (email) {
                        const arrayName = name.value.split(" ");
                        let lastName = "";

                        for (let i = 0; i < arrayName.length; i++) {
                            lastName += ` ${arrayName[i]}`;
                        }

                        lastName.trimStart();

                        managementApi.recordUser({
                            email: email.value,
                            last_name: lastName,
                            name: name.value,
                            telephone: telephone.value,
                            password: password.value
                        });
                    }
                }}
                canSubmitFrom={submitContext !== null && submitContext.canSubmit.usersForm}
                inputs={usersInputs}
                submitButtonLabel="Cadastrar"
                title="Cadastro de Usuários"
                formFor={"users"}
            />
            <ModalForm performAction={() => "teste"} onCloseWindow={() => setShowEditForm(false)} inputsForForm={usersInputs} visibility={showEditForm} />
            {!loading ? (
                <table className="mt-8 w-full">
                    <thead>
                        <tr className="bg-default-black text-white">
                            <td className="py-2 px-4">ID</td>
                            <td className="py-2 px-4">Nome</td>
                            <td className="py-2 px-4">Email</td>
                            <td className="py-2 px-4">Telefone</td>
                            <td className="py-2 px-4">Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {usersFromAPI ? usersFromAPI.map((user) => {
                            return (
                                <tr>
                                    <td className="py-2 px-4 border-y">{user.id}</td>
                                    <td className="py-2 px-4 border-y">{user.name + " " + user.last_name}</td>
                                    <td className="py-2 px-4 border-y">{user.email}</td>
                                    <td className="py-2 px-4 border-y">{features.formatPhoneNumber(user.telephone)}</td>
                                    <td className="py-2 px-4 border-y">
                                        <div className="transition-all cursor-pointer flex items-center gap-2 w-full">
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                if (user.id) {
                                                    performAction(user.id);
                                                }
                                            }} className="hover:-translate-y-1 transition-all bg-default-blue rounded-lg w-8 h-8 flex items-center justify-center"><BiEdit className="text-white text-xl" /></button>
                                            <button className="hover:-translate-y-1 transition-all bg-red-500 rounded-lg w-8 h-8 flex items-center justify-center"><BiTrash className="text-white text-xl" /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }) : (
                            "Não há registros para exibição"
                        )}
                    </tbody>
                </table>
            ) : "Carregando usuários..."}
        </AdministratorLayout>
    );
}

export default usersAdmin;