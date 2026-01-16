// tests/auth/login.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Authentication Tests', () => {

    test('Login with valid credentials', async ({ request }) => {
        const response = await request.post('/auth', {
            data: { username: "admin", password: "password123" }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toHaveProperty("token");
    });

    test('Login with invalid credentials', async ({ request }) => {
        const response = await request.post('/auth', {
            data: { username: "admin", password: "wrong_pass" }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.reason).toBe("Bad credentials");
    });
});