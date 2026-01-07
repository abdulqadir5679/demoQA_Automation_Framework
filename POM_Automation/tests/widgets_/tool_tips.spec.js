import { test, expect } from '@playwright/test';
import { ToolTipsPage } from '../../pages/widgets_/ToolTipsPage.js';
import { toolTipsTestData } from '../../data/toolTipsTestData.js';

test.describe('Test Suite : Tool Tips', () => {
    let toolTipsPage;

    test.beforeEach(async ({ page }) => {
        toolTipsPage = new ToolTipsPage(page);
        await toolTipsPage.navigateTo(toolTipsTestData.url);
    });

    test('Tool Tips', async () => {
        await toolTipsPage.hoverOverButton();
        await expect(toolTipsPage.buttonToolTip).toBeVisible();
        await expect(toolTipsPage.buttonToolTip).toHaveText(toolTipsTestData.expectedTexts.button);

        await toolTipsPage.hoverOverTextField();
        await expect(toolTipsPage.textFieldToolTip).toBeVisible();
        await expect(toolTipsPage.textFieldToolTip).toHaveText(toolTipsTestData.expectedTexts.textField);

        await toolTipsPage.hoverOverContrary();
        await expect(toolTipsPage.contraryToolTip).toBeVisible();
        await expect(toolTipsPage.contraryToolTip).toHaveText(toolTipsTestData.expectedTexts.contrary);

        await toolTipsPage.hoverOverSection();
        await expect(toolTipsPage.sectionToolTip).toBeVisible();
        await expect(toolTipsPage.sectionToolTip).toHaveText(toolTipsTestData.expectedTexts.section);
    });
});