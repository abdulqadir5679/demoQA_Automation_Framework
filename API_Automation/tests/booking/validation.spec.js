// tests/booking/validation.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Booking Validation Negative Tests', () => {

    test('Should return 500 for Malformed JSON', async ({ request }) => {
        // Sending a string instead of JSON object
        const response = await request.post('/booking', {
            headers: { 'Content-Type': 'application/json' },
            data: "This is not json" 
        });
        // API usually returns 400 or 500 for bad input
        expect(response.status()).toBe(400); 
    });

    test('Should handle delete without token', async ({ request }) => {
        // Try to delete a random ID without auth
        const response = await request.delete('/booking/12345');
        expect(response.status()).toBe(403); // Forbidden
    });
});