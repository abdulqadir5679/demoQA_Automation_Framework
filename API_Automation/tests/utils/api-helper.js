// utils/api-helpers.js
const { expect } = require('@playwright/test');

async function createRandomBooking(request) {
    const response = await request.post('/booking', {
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        data: {
            firstname: "Playwright",
            lastname: "Tester",
            totalprice: Math.floor(Math.random() * 1000),
            depositpaid: true,
            bookingdates: { checkin: "2024-01-01", checkout: "2024-01-02" },
            additionalneeds: "API Automation"
        }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    return body.bookingid;
}

async function getToken(request) {
    const response = await request.post('/auth', {
        headers: { 'Content-Type': 'application/json' },
        data: { username: "admin", password: "password123" }
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    return body.token;
}

module.exports = { createRandomBooking, getToken };