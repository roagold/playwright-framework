import { APIRequestContext } from '@playwright/test'


export class ApiClient {
    private readonly request: APIRequestContext
    private readonly baseURL: string

    constructor(request: APIRequestContext){
        this.request = request
        this.baseURL = process.env.API_URL!
    }

    async get(endpoint: string){
        const response = await this.request.get(`${this.baseURL}${endpoint}`)
        return response
    }

    async post(endpoint: string, body: Record<string, string>){
        const response = await this.request.post(`${this.baseURL}${endpoint}`, { form: body })
        return response
    }
}