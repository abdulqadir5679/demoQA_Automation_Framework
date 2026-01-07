export class TestUtils {
    static async takeScreenshot(page, name) {
        await page.screenshot({ path: `screenshots/${name}-${Date.now()}.png` });
    }

    static async waitForPageLoad(page) {
        await page.waitForLoadState('domcontentloaded');
    }

    static generateTestId() {
        return `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    static async retryAction(action, maxRetries = 3) {
        for (let i = 0; i < maxRetries; i++) {
            try {
                await action();
                return;
            } catch (error) {
                if (i === maxRetries - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
    }
}