export const testConfig = {
    baseUrl: 'https://demoqa.com',
    timeout: {
        default: 30000,
        element: 5000,
        navigation: 10000
    },
    retries: {
        default: 2,
        ci: 3
    },
    screenshots: {
        onFailure: true,
        path: './test-results/screenshots'
    },
    videos: {
        retain: 'on-failure',
        path: './test-results/videos'
    }
};