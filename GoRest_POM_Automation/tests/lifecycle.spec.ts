import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { request } from 'node:http';

dotenv.config();

let userId: number;

test.describe('User Lifecycle (CRUD Flow)', () => {
    //force to run the tests in series...  step 2 3 and 4 are failing bcs the step 1 is still in process ... and step 2 3 and 4 are related with step 1
    test.describe.configure({ mode: 'serial' })

    //1. Create POST
    test('Create a new user', async ({ request }) => {
        const randomEmail = `Lifecycle_${Date.now()}@test.com`;

        const response = await request.post(`${process.env.BASE_URL}/users`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`,
                'Content-Type': 'application/json'
            },
            data: {
                name: "Lifecycle User",
                gender: "male",
                email: randomEmail,
                status: "active"
            }
        });

        const body = await response.json();
        expect(response.status()).toBe(201);

        // saving the ID so the next cases can use it
        userId = body.id;
        console.log(`Created User ID ${userId}`);
    });


    //2. UPDATE (PATCH)
    test("Step 2: Update the User name", async ({ request }) => {
        //ensure step 1 worked
        expect(userId).toBeDefined();

        const response = await request.patch(`${process.env.BASE_URL}/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${process.env.API_TOKEN}`,
                "Content-Type": "application/json"
            },

            data: {
                name: "Lifecycle user UPDATED", //changing name
                status: "inactive" // changing status
            }
        });

        const body = await response.json();
        expect(response.status()).toBe(200);
        expect(body.name).toBe("Lifecycle user UPDATED")
        expect(body.status).toBe("inactive")
    });

    // 3. READ (GET)
    test('Step 3: Verify user details persist', async ({ request }) => {
        expect(userId).toBeDefined();

        const response = await request.get(`${process.env.BASE_URL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${process.env.API_TOKEN}`
            }
        });

        const body = await response.json();
        expect(response.status()).toBe(200);
        // Double check the name is definitely updated in the database
        expect(body.name).toBe("Lifecycle user UPDATED");
    });

    // DELETE (DELETE)
    test("Step 4: Delete the user", async ({ request }) => {
        const response = await request.delete(`${process.env.BASE_URL}/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${process.env.API_TOKEN}`,
                "Content-Type": 'application/json'
            }
        });

        // expext status code 204 No Content
        expect(response.status()).toBe(204);
    });

    // Negative CHeck (make sure they user is gone)
    test("Step 5: Confirm the user is deleted (404)", async ({ request }) => {
        const response = await request.get(`${process.env.BASE_URL}/users/${userId}`, {
            headers: {
                "Authorization": `Bearer ${process.env.API_TOKEN}`
            }
        });

        //Should not find the user anymore
        expect(response.status()).toBe(404);
    })

})