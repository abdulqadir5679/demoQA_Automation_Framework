export const brokenLinksTestData = {
    url: 'https://demoqa.com/broken',
    expectedUrls: {
        validLink: 'https://demoqa.com/',
        brokenLinkPattern: /(500|error|broken|not.*found)/i
    },
    timeouts: {
        default: 5000,
        brokenLink: 10000
    }
};