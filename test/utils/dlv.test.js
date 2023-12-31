const dlv = require("../../src/utils/dlv").default

const obj = {
	undef: undefined,
	zero: 0,
	one: 1,
	n: null,
	f: false,
	a: {
		two: 2,
		b: {
			three: 3,
			c: {
				four: 4
			}
		}
	}
};

describe('dlv function test', () => {
  it('should access a top-level property', () => {
    expect(dlv(obj, 'undef')).toBe(undefined);
    expect(dlv(obj, 'zero')).toBe(0);
    expect(dlv(obj, 'one')).toBe(1);
    expect(dlv(obj, 'n')).toBe(null);
    expect(dlv(obj, 'f')).toBe(false);
    expect(dlv(obj, 'a')).toStrictEqual({two: 2, b: {three: 3, c: {four: 4}}});
    expect(dlv(obj, ['undef'])).toBe(undefined);
    expect(dlv(obj, ['zero'])).toBe(0);
    expect(dlv(obj, ['one'])).toBe(1);
    expect(dlv(obj, ['n'])).toBe(null);
    expect(dlv(obj, ['f'])).toBe(false);
  });
  it('should access a nested property', () => {
    expect(dlv(obj, 'a.two')).toBe(2);
    expect(dlv(obj, 'a.b')).toStrictEqual({ three: 3, c: { four: 4 } });
    expect(dlv(obj, 'a.b.three')).toBe(3);
    expect(dlv(obj, 'a.b.c')).toStrictEqual({ four: 4 });
    expect(dlv(obj, 'a.b.c.four')).toBe(4);
   expect(dlv(obj, ['a'])).toStrictEqual({ two: 2, b: { three: 3, c: { four: 4 } } });
    expect(dlv(obj, ['a', 'two'])).toBe(2);
    expect(dlv(obj, ['a', 'b'])).toStrictEqual({ three: 3, c: { four: 4 } });
    expect(dlv(obj, ['a', 'b', 'three'])).toBe(3);
    expect(dlv(obj, ['a', 'b', 'c'])).toStrictEqual({ four: 4 });
    expect(dlv(obj, ['a', 'b', 'c', 'four'])).toBe(4);
    expect(dlv(obj, ['a', 'b', 'c', 'four', 'five'])).toBe(undefined);
  });
  it("should return the default value if the path doesn't exist", () => {
    expect(dlv(obj, 'a.b.c.five', 'default')).toBe('default');
    expect(dlv(obj, ['a', 'b', 'c', 'five'], 'default')).toBe('default');
  })
  it('should return the default value if the path is invalid', () => {
    expect(dlv(obj, 'a..b.c.five', 'default')).toBe('default');
    expect(dlv(obj, ['a', '', 'b', 'c', 'five'], 'default')).toBe('default');
  });
});
