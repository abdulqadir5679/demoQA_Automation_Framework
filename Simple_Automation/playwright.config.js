// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI */
  workers: 2,

  /* Reporter */
  reporter: [
    //['html'],
    ['list'],
    ['allure-playwright']
  ],
  /* Timeout settings */
  timeout: 60000,
  expect: {
    timeout: 10000
  },

  /* Shared settings for all projects */
  use: {
    /* Base URL */
    baseURL: 'https://demoqa.com/',
    
    /* Navigation timeout */
    navigationTimeout: 60000,
    
    /* Action timeout */
    actionTimeout: 30000,

    /*  VISUAL EXECUTION */
    headless: false,

    /* SLOW DOWN ACTIONS (milliseconds) */
    //slowMo: 1000,

    // Collect trace when retrying 
    trace: 'on-first-retry',,
    screenshot: 'only-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
