/**
 * Sample E2E Test
 *
 * This file verifies that Playwright E2E testing is working correctly
 */

import { test, expect } from '@playwright/test';

test.describe('E2E Test Setup Verification', () => {
  test('should load the page', async ({ page }) => {
    // This test will fail until we have an actual page
    // For now, we'll just verify Playwright is configured
    await page.goto('/');

    // Basic assertions
    expect(page.url()).toContain('localhost');
  });

  test('should have browser context', async ({ page, context }) => {
    expect(page).toBeDefined();
    expect(context).toBeDefined();
  });

  test('should support screenshots', async ({ page }) => {
    await page.goto('/');
    const screenshot = await page.screenshot();
    expect(screenshot).toBeDefined();
    expect(screenshot.length).toBeGreaterThan(0);
  });
});

test.describe('Responsive Testing', () => {
  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const viewport = page.viewportSize();
    expect(viewport?.width).toBe(375);
    expect(viewport?.height).toBe(667);
  });

  test('should work on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const viewport = page.viewportSize();
    expect(viewport?.width).toBe(1920);
    expect(viewport?.height).toBe(1080);
  });
});
