// tests/booking/booking-crud.spec.js
const { test, expect } = require('@playwright/test');
const { getToken } = require('../../tests/utils/api-helper');

test.describe.configure({ mode: 'serial' });

test.describe('Booking Lifecycle (End-to-End)', () => {
    let bookingId;

    test('1. Create Booking', async ({ request }) => {
        const response = await request.post('/booking', {
            data: {
                firstname: "Jim",
                lastname: "Beam",
                totalprice: 111,
                depositpaid: true,
                bookingdates: { checkin: "2024-01-01", checkout: "2024-01-02" },
                additionalneeds: "Lunch"
            }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        bookingId = body.bookingid;
        console.log(`Booking Created: ${bookingId}`);
    });

    test('2. Get Booking', async ({ request }) => {
        const response = await request.get(`/booking/${bookingId}`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.firstname).toBe("Jim");
    });

    test('3. Update Booking', async ({ request }) => {
        const token = await getToken(request); // Use our helper!
        
        const response = await request.put(`/booking/${bookingId}`, {
            headers: { 'Cookie': `token=${token}` },
            data: {
                firstname: "Jim",
                lastname: "Beam",
                totalprice: 222, // Changed price
                depositpaid: true,
                bookingdates: { checkin: "2024-01-01", checkout: "2024-01-02" },
                additionalneeds: "Dinner" // Changed needs
            }
        });
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.totalprice).toBe(222);
    });

    test('4. Delete Booking', async ({ request }) => {
        const token = await getToken(request);
        
        const response = await request.delete(`/booking/${bookingId}`, {
            headers: { 'Cookie': `token=${token}` }
        });
        expect(response.status()).toBe(201);
    });
});