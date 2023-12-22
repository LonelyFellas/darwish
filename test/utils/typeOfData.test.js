import typeOfData from '../../src/utils/typeOfData';

describe('typeOfData of utils function to test', () => {
  it('check type', () => {
    expect(typeOfData(null)).toBe('null');
    expect(typeOfData(undefined)).toBe('undefined');
    expect(typeOfData('')).toBe('string');
    expect(typeOfData(false)).toBe('boolean');
    expect(typeOfData({ name: 1 })).toBe('object');
    expect(typeOfData([])).toBe('array');
    expect(typeOfData(Symbol(1))).toBe('symbol');
    expect(typeOfData(new Date())).toBe('date');
    expect(typeOfData(() => 1)).toBe('function');
    expect(typeOfData(new RegExp('/^d/g'))).toBe('regexp');
    expect(typeOfData(new Set())).toBe('set');
    expect(typeOfData(new Map())).toBe('map');
  });
});
