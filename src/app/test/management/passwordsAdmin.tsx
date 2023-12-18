// import { managementApi } from "@/app/api/management";
// import { Form } from "@/app/components/Form";
// import { AuthenticationContext } from "@/app/context/AuthenticationContext";
// import { SubmitContext } from "@/app/context/SubmitContext";
// import { Device } from "@/app/types/Device";
// import AdministratorLayout from "@/layouts/Administrator";
// import { useContext, useEffect, useState } from "react";
// import { BiEdit, BiTrash } from "react-icons/bi";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";

// const passwordsAdmin = () => {
//     const [devicesFromAPI, setDevicesFromAPI] = useState<Device[]>([]);
//     const context = useContext(AuthenticationContext);
//     const submitContext = useContext(SubmitContext);
//     const [loading, setLoading] = useState(true);
//     const passwordInputs = [
//         { inputId: "deviceEmail", inputValue: "", inputName: "Email", inputPlaceholder: "ex: teste@gmail.com", inputType: "email", inputAllows: "email" },
//         { inputId: "deviceName", inputValue: "", inputName: "Dispositivo", inputPlaceholder: "ex: Notebook", inputType: "text", inputAllows: "name" },
//         { inputId: "deviceIp", inputValue: "", inputName: "IP", inputPlaceholder: "ex: 192.168.100.01", inputType: "text", inputAllows: "ip" },
//         { inputId: "deviceObs", inputValue: "", inputName: "Observações", inputPlaceholder: "ex: Contém teclado númerico...", inputType: "text", inputAllows: "text" }
//     ];

//     const togglePasswordVisibility = async (registerId: number) => {
//         const resolvePasswordOfDevice = devicesFromAPI.find((device) => device.id === registerId);
//         const index = devicesFromAPI.findIndex((device) => device.id === registerId);

//         if (resolvePasswordOfDevice) {
//             const deviceStateClone = [...devicesFromAPI];
//             if (deviceStateClone[index].alreadyShownPassword) {
//                 deviceStateClone[index] = { ...deviceStateClone[index], alreadyShownPassword: false };
//                 setDevicesFromAPI(deviceStateClone);
//                 return;
//             }
//         }

//         const password = prompt("Insira sua senha para prosseguir: ");
//         if (password !== null && context !== null && context.localStorageData.loggedUser !== null) {
//             const response = await managementApi.showPassword(context.localStorageData.loggedUser.id, registerId, password);
//             if (response) {
//                 const foundDevice = devicesFromAPI.findIndex((device) => device.id === response.device_id);
//                 if (foundDevice !== -1) {
//                     const deviceStateClone = [...devicesFromAPI];
//                     deviceStateClone[foundDevice] = { ...deviceStateClone[foundDevice], password: response.password, alreadyShownPassword: true };
//                     setDevicesFromAPI(deviceStateClone);
//                     console.log("Senha: " + response.password);
//                     console.log(devicesFromAPI);
//                 }
//             }
//             return;
//         }
//         alert("Algo deu errado!");
//     };

//     useEffect(() => {
//         try {
//             const addAlreadyShownPasswordKey = (state: Device[]) => {
//                 if (state !== undefined) {
//                     return state.map((register) => {
//                         return { ...register, alreadyShownPassword: false }
//                     });
//                 }
//                 return state;
//             }
//             const devices = async () => {
//                 const newData = addAlreadyShownPasswordKey(await managementApi.recoverAllDevices());
//                 setDevicesFromAPI(newData);
//             }
//             devices();
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     return (
//         <AdministratorLayout section={2}>
//             <div>
//                 <div>
//                     <h1 className="text-4xl font-bold">Cofre de Senhas</h1>
//                     <p className="text-gray-500">Consulte e modifique as senhas dos dispositivos de seus clientes de forma facilitada.</p>
//                 </div>
//             </div>
//             {/* <Form action={() => managementApi.recordPassword({
                
//             })} canSubmitFrom={submitContext !== null && submitContext?.canSubmit.passwordsForm} inputs={passwordInputs} submitButtonLabel="Cadastrar" title="Cadastro de Dispositivos" formFor={"passwords"} /> */}
//             {!loading ? (
//                 <table className="mt-8 w-full">
//                     <thead>
//                         <tr className="bg-default-black text-white">
//                             <td className="py-2 px-4">Cliente</td>
//                             <td className="py-2 px-4">Email</td>
//                             <td className="py-2 px-4">Dispositivo</td>
//                             <td className="py-2 px-4">IP</td>
//                             <td className="py-2 px-4">Observações</td>
//                             <td className="py-2 px-4">Senha</td>
//                             <td className="py-2 px-4">Ações</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {devicesFromAPI ? devicesFromAPI.map((device) => {
//                             return (
//                                 <tr>
//                                     <td className="py-2 px-4 border-y">{device.client_name}</td>
//                                     <td className="py-2 px-4 border-y">{device.client_email}</td>
//                                     <td className="py-2 px-4 border-y">{device.device}</td>
//                                     <td className="py-2 px-4 border-y">{device.ip}</td>
//                                     <td className="py-2 px-4 border-y">{device.observations}</td>
//                                     <td className="py-2 px-4 border-y">
//                                         <div className="flex h-full items-center gap-2 text-default-blue">
//                                             {device.alreadyShownPassword ? device.password : "**********"}
//                                             {!device.alreadyShownPassword
//                                                 ? <FaEye onClick={() => togglePasswordVisibility(device.id ?? 0)} className="cursor-pointer text-xl text-default-blue" />
//                                                 : <FaEyeSlash onClick={() => togglePasswordVisibility(device.id ?? 0)} className="cursor-pointer text-xl text-default-blue" />}
//                                         </div>
//                                     </td>
//                                     <td className="py-2 px-4 border-y">
//                                         <div className="cursor-pointer flex items-center gap-2 w-full">
//                                             <button className="bg-default-blue rounded-lg w-8 h-8 flex items-center justify-center"><BiEdit className="text-white text-xl" /></button>
//                                             <button className="bg-red-500 rounded-lg w-8 h-8 flex items-center justify-center"><BiTrash className="text-white text-xl" /></button>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             )
//                         }) : (
//                             "Não há registros para exibição"
//                         )}
//                     </tbody>
//                 </table>
//             ) : "Carregando dispositivos..."}
//         </AdministratorLayout>
//     );
// }

// export default passwordsAdmin;