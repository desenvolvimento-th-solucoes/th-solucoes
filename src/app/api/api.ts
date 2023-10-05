import axios from "axios";
import { Register } from "../types/Register";
import { Login } from "../types/Login";
import { Message } from "../types/Message";
import { Save } from "../types/Save";

const instance = axios.create({
    baseURL: "https://nemwab.hospedagemelastica.com.br/public/api",
    withCredentials: true
});

export const api = {
    contact: async (informations: Message) => {
        try {
            const request = await instance.post("/contact", {
                name: informations.name,
                email: informations.email,
                body: informations.message
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    register: async (data: Register) => {
        try {
            const request = await instance.post("/register", data);
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    login: async (credentials: Login) => {
        try {
            const request = await instance.post("/login", credentials);
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    check: async () => {
        try {
            const request = await instance.get("/check");
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    destroy: async () => {
        try {
            const request = await instance.get("/destroy");
            const response = await request.data;
            localStorage.removeItem("logged_user");
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    save: async (id: number, informations: Save) => {
        try {
            const request = await instance.put("/save", {
                id: id,
                data: informations
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    },
    redefine: async (id: number, password: string) => {
        try {
            const request = await instance.put("/redefine", {
                id: id,
                password: password
            });
            const response = await request.data;
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}
