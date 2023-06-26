import axios from 'axios';

export class HttpClient {

    private static client = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
    });

    static async get(url: string, params?: any) {
        try {
            const result = await this.client.get(url, {
                params: params
            }); 
            return result.data;
        } catch (error) {
            console.log(error); 
        } 
    }

}