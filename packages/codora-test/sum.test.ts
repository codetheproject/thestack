import { describe, expect, it } from 'vitest';
import { sum } from './sum';

describe('sum a value together', function () {
  it('should return 0 if no value is passed', function () {
    expect(sum()).toBe(0);
  });

  it('should return the value if only one value is passed', function () {
    expect(sum(1)).toBe(1);
  });

  it('should return the sum of all values', function () {
    expect(sum(1, 2, 3)).toBe(6);
  });

  describe('when the value is negative', function () {
    it('should return the sum of all values', function () {
      expect(sum(-1, -2, -3)).toBe(-6);
    });
  });
});
