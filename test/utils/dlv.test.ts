import dlv from '../../src/utils/dlv';
describe('dlv function test', () => {
  it('should access a top-level property', () => {
    expect(dlv({ a: 1 }, 'a')).toBe(1);
  });
});
