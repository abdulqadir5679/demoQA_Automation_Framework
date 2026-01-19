import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
// Import the JSON data we just created
import userData from './users.json'; 

dotenv.config();

// We group these tests together
test.describe('Data Driven User Creation', () => {

  // THE MAGIC LOOP: This runs once for every item in your JSON file
  for (const user of userData) {
    
    test(`Create User: ${user.name}`, async ({ request }) => {
      
      // 1. Dynamic Email Generator
      // We add the current time (Date.now) to make the email unique every time we run
      const randomEmail = `auto_test_${Date.now()}_${Math.random().toString(36).substring(7)}@test.com`;

      // 2. Send the Request
      const response = await request.post(`${process.env.BASE_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        data: {
          name: user.name,
          gender: user.gender,
          email: randomEmail, // Using our dynamic email
          status: user.status
        }
      });

      // 3. Validation
      // We expect 201 Created
      expect(response.status()).toBe(201);

      // Verify the response body matches what we sent
      const responseBody = await response.json();
      expect(responseBody.name).toBe(user.name);
      expect(responseBody.email).toBe(randomEmail);

      console.log(`✅ Created user: ${user.name} with ID: ${responseBody.id}`);
    });
  }
});