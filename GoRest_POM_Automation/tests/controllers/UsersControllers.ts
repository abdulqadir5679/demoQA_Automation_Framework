import { APIRequestContext, APIResponse } from '@playwright/test';

export class UsersController {
    private request: APIRequestContext;

    // We pass the "request" object to this class when we start the test
    constructor(request: APIRequestContext) {
        this.request = request;
    }

    // A helper to get headers automatically
    private getHeaders() {
        return {
            'Authorization': `Bearer ${process.env.API_TOKEN}`,
            'Content-Type': 'application/json'
        };
    }

    // ACTION: Create User
    async createUser(name: string, gender: string, email: string, status: string): Promise<APIResponse> {
        return this.request.post(`${process.env.BASE_URL}/users`, {
            headers: this.getHeaders(),
            data: { name, gender, email, status }
        });
    }

    // ACTION: Update User
    async updateUser(userId: number, data: object): Promise<APIResponse> {
        return this.request.patch(`${process.env.BASE_URL}/users/${userId}`, {
            headers: this.getHeaders(),
            data: data
        });
    }

    // ACTION: Get User
    async getUser(userId: number): Promise<APIResponse> {
        return this.request.get(`${process.env.BASE_URL}/users/${userId}`, {
            headers: this.getHeaders()
        });
    }

    // ACTION: Delete User
    async deleteUser(userId: number): Promise<APIResponse> {
        return this.request.delete(`${process.env.BASE_URL}/users/${userId}`, {
            headers: this.getHeaders()
        });
    }
}