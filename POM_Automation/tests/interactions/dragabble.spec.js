import { test, expect } from '@playwright/test';
import { DragabblePage } from '../../pages/interactions/DragabblePage.js';
import { dragabbleTestData } from '../../data/dragabbleTestData.js';

test.describe('Test Suite : Draggablr', () => {
    let dragabblePage;

    test.beforeEach(async ({ page }) => {
        dragabblePage = new DragabblePage(page);
        await dragabblePage.navigateTo(dragabbleTestData.url);
    });

    test('Simple Draggable', async () => {
        await dragabblePage.dragElement(dragabbleTestData.dragOffset.x, dragabbleTestData.dragOffset.y);
        expect(await dragabblePage.isDragBoxVisible()).toBeTruthy();
        await dragabblePage.page.waitForTimeout(2000);
    });

    test('Axis Restricted Draggable', async () => {
        await dragabblePage.dragElement(dragabbleTestData.dragOffset.x, dragabbleTestData.dragOffset.y);
        expect(await dragabblePage.isDragBoxVisible()).toBeTruthy();
        await dragabblePage.page.waitForTimeout(2000);
    });

    test('Container Restricted Draggable', async () => {
        await dragabblePage.dragElement(dragabbleTestData.dragOffset.x, dragabbleTestData.dragOffset.y);
        expect(await dragabblePage.isDragBoxVisible()).toBeTruthy();
        await dragabblePage.page.waitForTimeout(2000);
    });

    test('Cursor Style Draggable', async () => {
        await dragabblePage.dragElement(dragabbleTestData.dragOffset.x, dragabbleTestData.dragOffset.y);
        expect(await dragabblePage.isDragBoxVisible()).toBeTruthy();
        await dragabblePage.page.waitForTimeout(2000);
    });
});