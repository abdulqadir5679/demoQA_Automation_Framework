import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
// Import your new Controller
import { UsersController } from './controllers/UsersControllers';

dotenv.config();

let userId: number;

test.describe('POM Refactored Lifecycle', () => {
    
    test.describe.configure({ mode: 'serial' });

    test('Step 1: Create a new user', async ({ request })=> {
        // Initialize the Controller
        const api = new UsersController(request);
        
        const randomEmail = `POM_${Date.now()}@test.com`;

        // LOOK HOW CLEAN THIS IS! 👇
        const response = await api.createUser("POM Master", "female", randomEmail, "active");

        const body = await response.json();
        expect(response.status()).toBe(201);
        userId = body.id;
        console.log(`Created User ID via POM: ${userId}`);
    });

    test("Step 2: Update the User name", async ({ request })=> {
        const api = new UsersController(request);
        
        const response = await api.updateUser(userId, {
            name: "POM Updated Name",
            status: "inactive"
        });

        const body = await response.json();
        expect(response.status()).toBe(200);
        expect(body.name).toBe("POM Updated Name");
     });

    test("Step 3: Verify User", async ({ request })=> {
        const api = new UsersController(request);
        const response = await api.getUser(userId);
        const body = await response.json();
        expect(body.name).toBe("POM Updated Name");
    });

    test("Step 4: Delete the user", async ({ request })=> {
        const api = new UsersController(request);
        const response = await api.deleteUser(userId);
        expect(response.status()).toBe(204);
    });
});