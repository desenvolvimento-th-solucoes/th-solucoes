export type Device = {
    id?: number;
    client_name?: string;
    client_email: string;
    device: string;
    observations: string;
    password: string;
    alreadyShownPassword?: boolean;
    ip: string;
    updated_at?: string;
}