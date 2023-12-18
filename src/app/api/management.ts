import axios from "axios";
import { User } from "../types/User";
import { Device } from "../types/Device";

const instance = axios.create({
    baseURL: "http://localhost/th-solucoes-api/public/api",
    withCredentials: true
});

export const managementApi = {
    recordUser: async (user: User) => {
        try {
            const request = await instance.post("/administrator/user/record", user);
            const response = await request.data;
            return response;
        } catch (error) {
            console.error("Failed request [RecordException]: " + error);
        }
    },

    recordDevice: async (deviceInformations: Device) => {
        try {
            const request = await instance.post("/administrator/device/record", deviceInformations);
            const response = await request.data;
            return response;
        } catch (error) {
            console.error("Failed request [RecordException]: " + error);
        }
    },

    recoverAllUsers: async () => {
        try {
            const request = await instance.get("/administrator/user/all");
            const response = await request.data;
            return response;
        } catch (error) {
            console.error("Failed request [AllUsersException]: " + error);
        }
    },

    recoverAllDevices: async () => {
        try {
            const request = await instance.get("/administrator/device/all");
            const response = await request.data;
            return response;
        } catch (error) {
            console.error("Failed request [AllDevicesException]: " + error);
        }
    },

    showPassword: async (userId: number, registerId: number, operatorPassword: string) => {
        try {
            const request = await instance.post("/administrator/device/showPassword", {
                operatorId: userId,
                deviceId: registerId,
                password: operatorPassword
            });
            const response = request.data;
            return response;
        } catch (error) {
            console.error("Failed request [NotAuthorized]");
            console.error(error);
        }
    }
}