/**
 * Playwright E2E Test Setup
 *
 * Common utilities and helpers for E2E tests
 */

import { expect } from '@playwright/test';

/**
 * Wait for an element to be visible and ready
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 */
export async function waitForElement(page, selector, timeout = 5000) {
  await page.waitForSelector(selector, {
    state: 'visible',
    timeout,
  });
}

/**
 * Fill a form field with better error handling
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {string} value
 */
export async function fillField(page, selector, value) {
  await waitForElement(page, selector);
  await page.fill(selector, value);
}

/**
 * Click an element with better error handling
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 */
export async function clickElement(page, selector) {
  await waitForElement(page, selector);
  await page.click(selector);
}

/**
 * Wait for navigation to complete
 * @param {import('@playwright/test').Page} page
 */
export async function waitForNavigation(page) {
  await page.waitForLoadState('networkidle');
}

/**
 * Take a screenshot with a descriptive name
 * @param {import('@playwright/test').Page} page
 * @param {string} name
 */
export async function takeScreenshot(page, name) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}

/**
 * Check if element exists
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @returns {Promise<boolean>}
 */
export async function elementExists(page, selector) {
  try {
    await page.waitForSelector(selector, { timeout: 1000 });
    return true;
  } catch {
    return false;
  }
}

/**
 * Login helper for tests that need authentication
 * @param {import('@playwright/test').Page} page
 * @param {string} username
 * @param {string} password
 */
export async function login(page, username = 'admin', password = 'password123') {
  await page.goto('/');
  await fillField(page, '#username', username);
  await fillField(page, '#password', password);
  await clickElement(page, 'button[type="submit"]');
}

/**
 * Assert element is visible
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 */
export async function assertVisible(page, selector) {
  const isVisible = await page.isVisible(selector);
  expect(isVisible).toBe(true);
}

/**
 * Assert element has text
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {string} expectedText
 */
export async function assertText(page, selector, expectedText) {
  const text = await page.textContent(selector);
  expect(text).toContain(expectedText);
}

/**
 * Wait for element to disappear
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} timeout
 */
export async function waitForElementToDisappear(page, selector, timeout = 5000) {
  await page.waitForSelector(selector, {
    state: 'hidden',
    timeout,
  });
}

/**
 * Get element count
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @returns {Promise<number>}
 */
export async function getElementCount(page, selector) {
  return await page.locator(selector).count();
}

// Export all utilities
export default {
  waitForElement,
  fillField,
  clickElement,
  waitForNavigation,
  takeScreenshot,
  elementExists,
  login,
  assertVisible,
  assertText,
  waitForElementToDisappear,
  getElementCount,
};
