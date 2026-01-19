// tests/ping/health-check.spec.js
const { test, expect } = require('@playwright/test');

test('API Health Check - Ping', async ({ request }) => {
    const response = await request.get('/ping');
    expect(response.status()).toBe(201); // Restful-booker returns 201 for ping
});