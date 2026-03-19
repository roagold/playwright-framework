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

    async postForm(endpoint: string, body: Record<string, string | number | boolean>){
        const response = await this.request.post(`${this.baseURL}${endpoint}`, { form: body })
        return response
    }

        async postJson(endpoint: string, body: object){
        const response = await this.request.post(`${this.baseURL}${endpoint}`, { data: body})
        return response
    }
}