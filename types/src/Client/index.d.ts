import { AxiosInstance } from 'axios';
export declare abstract class Client {
    protected readonly axios: AxiosInstance;
    constructor(axios: AxiosInstance);
}
