import { features } from "./features";
import PhoneNumber from "google-libphonenumber";

const phoneUtil = PhoneNumber.PhoneNumberUtil.getInstance();

export const validator = {
    validateMessage: (message: string, length: number) => message.length > length || message.length === 0,
    validateEmail: (email: string) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    },
    validatePassword: (password: string) => password.length < 8,
    validateName :(name: string) => {
        if (name.length < 2) {
            return 0; 
        } else if (features.hasNumber(name)) {
            return 1;
        }
        return -1;
    },
    validateLastName: (lastName: string) => {
        if (lastName.length < 5) {
            return 0; 
        } else if (features.hasNumber(lastName)) {
            return 1;
        }
        return -1;
    },
    validateTelephone: (telephone: any) => {
        try {
            const parsedPhoneNumber = phoneUtil.parse(telephone, "BR");
            if (!phoneUtil.isValidNumber(parsedPhoneNumber)) {
                return true;
            }
        } catch (error) {
            return true;
        }
        return false;
    }
}