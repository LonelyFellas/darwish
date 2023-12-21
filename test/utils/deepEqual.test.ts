import deepEqual from '../../src/utils/deepEqual';

describe('deepEqual', () => {
  it('two objects', () => {
    expect(deepEqual({ a: [2, 3], b: [4] }, { a: [2, 3], b: [4] })).toBe(true);
    expect(
      deepEqual(
        { a: [1, 2, 3, 4], b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 },
        { a: [1, 2, 3, 4], b: 2, c: 3, d: 4, e: 5, f: 6, g: 7 },
      ),
    ).toBe(true);
    const obj1 = { a: [2, 3], b: [4] };
    const obj2 = { b: [4], a: [2, 3] };
    expect(deepEqual(obj1, obj2)).toBe(true);
    // object.keys
    expect(deepEqual(Object.keys(obj1), Object.keys(obj2))).toBe(false);
    expect(deepEqual(Object.keys(obj1), Object.keys(obj2).reverse())).toBe(
      true,
    );
    expect(deepEqual({ a: 2, b: 4 }, { a: 2, B: 4 })).toBe(false);
    expect(deepEqual({ a: 2, b: 4 }, { a: 2, b: '4' })).toBe(false);
    expect(deepEqual({ a: 2, b: 0 }, { a: 2, b: false })).toBe(false);
  });
  it('two Map', () => {
    expect(
      deepEqual(
        new Map([
          ['a', 1],
          ['b', 2],
        ]),
        new Map([
          ['b', 2],
          ['a', 1],
        ]),
      ),
    ).toBe(true);
    expect(deepEqual(new Map([['a', [1, 2]]]), new Map([['a', [2, 1]]]))).toBe(
      false,
    );
    expect(deepEqual(new Map([['a', 1]]), new Map([['b', 1]]))).toBe(false);
    expect(
      deepEqual(
        new Map([
          [{}, 3],
          [{}, 2],
          [{}, 1],
        ]),
        new Map([
          [{}, 1],
          [{}, 2],
          [{}, 3],
        ]),
      ),
    ).toBe(true);
    expect(
      deepEqual(
        new Map([[undefined, undefined]]),
        // @ts-ignore
        new Map([[undefined, null]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [{}, null],
          [true, 2],
          [{}, 1],
          [undefined, {}],
        ]),
        // @ts-ignore
        new Map([
          [{}, 1],
          [true, 2],
          [{}, null],
          [undefined, {}],
        ]),
      ),
    ).toBe(true);

    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [false, 3],
          [{}, 2],
          [{}, 1],
        ]),
        // @ts-ignore
        new Map([
          [{}, 1],
          [{}, 2],
          [false, 3],
        ]),
      ),
    ).toBe(true);

    expect(
      deepEqual(
        new Map([[null, undefined]]),
        // @ts-ignore
        new Map([[null, null]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        new Map([[undefined, 3]]),
        // @ts-ignore
        new Map([[null, 3]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [false, 3],
          [{}, 2],
          [{}, 1],
        ]),
        // @ts-ignore
        new Map([
          [{}, 1],
          [{}, 2],
          [false, 3],
        ]),
      ),
    ).toBe(true);

    expect(deepEqual(new Map(), new Map([[{}, 1]]))).toBe(false);

    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [{}, null],
          [false, 3],
        ]),
        // @ts-ignore
        new Map([
          [{}, null],
          [true, 2],
        ]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [false, 3],
          [{}, null],
        ]),
        // @ts-ignore
        new Map([
          [true, 2],
          [{}, null],
        ]),
      ),
    ).toBe(false);
    expect(
      deepEqual(
        // @ts-ignore
        new Map([
          [undefined, null],
          ['+000', 2],
        ]),
        // @ts-ignore
        new Map([
          [null, undefined],
          [false, '2'],
        ]),
      ),
    ).toBe(false);
  });
  it('two Set', () => {
    expect(
      deepEqual(new Set(['a', 1, 'b', 2]), new Set(['b', 2, 'a', 1])),
    ).toBe(true);
    expect(deepEqual(new Set(['a', 1]), new Set(['b', 1]))).toBe(false);
    expect(
      deepEqual(new Set([{}, 1, {}, {}, 2]), new Set([{}, 1, {}, 2, {}])),
    ).toBe(true);
    expect(deepEqual(new Set(), new Set([1]))).toBe(false);
    // @ts-ignore
    expect(deepEqual(new Set([{ a: 1 }, 2]), new Set(['2', { a: 2 }]))).toBe(
      false,
    );
    expect(
      deepEqual(
        new Set([null, '', 1, 5, 2, false]),
        // @ts-ignore
        new Set([undefined, 0, '5', true, '2', '-000']),
      ),
    ).toBe(false);
    // @ts-ignore
    expect(deepEqual(new Set(), new Map())).toBe(false);
    let maplikeSet = new Set();
    Object.defineProperty(maplikeSet, 'constructor', {
      enumerable: false,
      value: Map,
    });
    // @ts-ignore
    maplikeSet.__proto__ = Map.prototype; // eslint-disable-line no-proto
    // @ts-ignore
    expect(deepEqual(maplikeSet, new Map())).toBe(false);
  });
});

/// test-111
