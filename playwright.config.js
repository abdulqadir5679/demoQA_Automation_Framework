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
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    /* Base URL */
    baseURL: 'https://demoqa.com/',
    //storageState: 'undefined',

    /*  VISUAL EXECUTION */
    headless: false,

    /* SLOW DOWN ACTIONS (milliseconds) */
    slowMo: 2000,

    /* Collect trace when retrying */
    trace: 'on-first-retry',
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
