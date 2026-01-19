import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { request } from 'node:http';

dotenv.config();

test.describe(`Negative Scenarios`, () => {

    //scenario 1 : security check
    test('Should reject request with Invalid Token (401)', async ({ request }) => {
        const response = await request.post(`${process.env.BASE_URL}/users`, {
            headers: {
                'Authorization': `Bearer BAD_TOKEN_123`, //purposely sending invalid token
                'Content-Type': 'application/json'
            },

            data: {
                name: 'Hamza',
                gender: 'male',
                email: 'hamza@gmail.com',
                status: 'active'
            }
        });

        // expect it to fail... if 201 => fail (security hole)
        expect(response.status()).toBe(401);

    });

    //scenario 2 : validation check

    test('Should reject user without email (422)', async ({ request }) => {
        const response = await request.post(`${process.env.BASE_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
                'content-Type': 'application/json'
            },

            data: {
                name: 'Hamza',
                gender: 'male',
                // no email for this test - purposely
                status: 'active'
            }
        });

        // expecting to get 422 code for missing data
        expect(response.status()).toBe(422);

        //verify the api tells us WHICH field is missing
        const body = await response.json();
        // the error message should maintain "email"
        console.log('Error Response', body);
        expect(JSON.stringify(body)).toContain("can't be blank");
    });

});