/**
 * Vitest Test Setup
 *
 * This file runs before all tests to set up the test environment,
 * configure globals, and provide utilities.
 */

import { expect, beforeEach, afterEach, vi } from 'vitest';

// Configure test environment
beforeEach(() => {
  // Clear all mocks before each test
  vi.clearAllMocks();

  // Reset DOM if needed
  if (typeof document !== 'undefined') {
    document.body.innerHTML = '';
  }

  // Reset localStorage
  if (typeof localStorage !== 'undefined') {
    localStorage.clear();
  }

  // Reset sessionStorage
  if (typeof sessionStorage !== 'undefined') {
    sessionStorage.clear();
  }
});

afterEach(() => {
  // Cleanup after each test
  vi.restoreAllMocks();
});

// Custom matchers (if needed)
expect.extend({
  toBeValidToken(received) {
    const pass = typeof received === 'string' && received.length > 0;
    return {
      pass,
      message: () =>
        pass
          ? `expected ${received} not to be a valid token`
          : `expected ${received} to be a valid token (non-empty string)`,
    };
  },

  toHaveBeenCalledOnceWith(received, ...expected) {
    const pass =
      received.mock.calls.length === 1 &&
      JSON.stringify(received.mock.calls[0]) === JSON.stringify(expected);
    return {
      pass,
      message: () =>
        pass
          ? `expected function not to be called once with ${JSON.stringify(expected)}`
          : `expected function to be called once with ${JSON.stringify(expected)}, but was called ${received.mock.calls.length} times`,
    };
  },
});

// Global test utilities
global.createMockEvent = (type, properties = {}) => {
  return {
    type,
    preventDefault: vi.fn(),
    stopPropagation: vi.fn(),
    target: {},
    ...properties,
  };
};

// DOM helper utilities
global.waitFor = (callback, { timeout = 1000, interval = 50 } = {}) => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const check = () => {
      try {
        const result = callback();
        if (result) {
          resolve(result);
        } else if (Date.now() - startTime > timeout) {
          reject(new Error('Timeout waiting for condition'));
        } else {
          setTimeout(check, interval);
        }
      } catch (error) {
        if (Date.now() - startTime > timeout) {
          reject(error);
        } else {
          setTimeout(check, interval);
        }
      }
    };

    check();
  });
};

// Suppress console errors in tests (optional)
// Uncomment if you want to suppress console output during tests
// global.console = {
//   ...console,
//   error: vi.fn(),
//   warn: vi.fn(),
// };

// Export test utilities
export { vi, expect };
