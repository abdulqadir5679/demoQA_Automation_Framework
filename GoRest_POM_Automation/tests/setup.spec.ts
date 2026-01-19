import { test, expect } from '@playwright/test';

test('Check Environment Setup', async () => {
    console.log("Base URL is: " + process.env.BASE_URL);

    // Security check: We verify the token exists without printing it
    if (process.env.API_TOKEN) {
        console.log("SUCCESS: Token is loaded securely! 🔒");
    } else {
        console.error("ERROR: Token NOT found! ❌");
    }
});