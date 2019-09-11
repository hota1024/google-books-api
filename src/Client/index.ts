import { AxiosInstance } from 'axios'

export abstract class Client {
  constructor(protected readonly axios: AxiosInstance) {}
}
