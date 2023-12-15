import toNumber from '../../src/utils/toNumber';

describe('toNumber of utils function to test', () => {
  // '12345'
  it('When arg_0 is a numeric string, and no default value', () => {
    expect(toNumber('12345')).toBe(12345);
  });
  // '123A'
  it('When arg_0 is number is alphanumeric, and no default value', () => {
    expect(toNumber('1234A')).toBe(1234);
  });
  // 'AAABBB'
  it('When arg_0 is a string of letters, and no default value', () => {
    expect(toNumber('AAABBB')).toBe(NaN);
    expect(toNumber('')).toBe(NaN);
  });
  /**
   * @param dataSource: AAABBB
   * @param defaultValue: 0
   */
  it('When arg_0 a string of letters, and it have a default value', () => {
    expect(toNumber('AAABBB', 0)).toBe(0);
  });
  // 122333
  it('When arg_0 is a number, and no default value', () => {
    expect(toNumber(11111)).toBe(11111);
  });
  // Object type
  it('When arg_0 is a Object type , and no default value', () => {
    expect(toNumber({ name: 1 })).toBe(NaN);
    expect(toNumber(new Set([1, 2, 3]))).toBe(NaN);
  });
  // Object type
  it('When arg_0 is a Object type , and it have a default value', () => {
    expect(toNumber({ name: 1 }, 0)).toBe(0);
    expect(toNumber(new Set([1, 2, 3]), 9)).toBe(9);
  });
});
