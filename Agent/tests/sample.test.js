/**
 * Sample Test File
 *
 * This file verifies that the test setup is working correctly
 */

import { describe, it, expect, vi } from 'vitest';

describe('Test Setup Verification', () => {
  it('should run basic assertions', () => {
    expect(true).toBe(true);
    expect(1 + 1).toBe(2);
    expect('hello').toMatch(/hello/);
  });

  it('should support ES6 features', () => {
    const arrow = () => 'arrow function';
    expect(arrow()).toBe('arrow function');

    const [a, b] = [1, 2];
    expect(a).toBe(1);
    expect(b).toBe(2);

    const obj = { name: 'test' };
    const { name } = obj;
    expect(name).toBe('test');
  });

  it('should support async/await', async () => {
    const asyncFunc = async () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('done'), 10);
      });
    };

    const result = await asyncFunc();
    expect(result).toBe('done');
  });

  it('should support mocking with vitest', () => {
    const mockFn = vi.fn();
    mockFn('hello');

    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('hello');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should have access to DOM via happy-dom', () => {
    expect(typeof document).toBe('object');
    expect(typeof window).toBe('object');

    const div = document.createElement('div');
    div.textContent = 'Hello World';
    expect(div.textContent).toBe('Hello World');
  });

  it('should support custom matchers', () => {
    const token = 'abc123';
    expect(token).toBeValidToken();
  });
});

describe('Math Utilities (Example)', () => {
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  it('should add numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  it('should multiply numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 100)).toBe(0);
  });
});
