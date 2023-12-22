import {isSymbol} from '../../src/utils/is';
import deepEqual from '../../src/utils/deepEqual';


describe('deepEqual', () => {
  it('two objects', () => {
    expect(deepEqual({a: [2, 3], b: [4]}, {a: [2, 3], b: [4]})).toBe(true);
    expect(
      deepEqual(
        {a: [1, 2, 3, 4], b: 2, c: 3, d: 4, e: 5, f: 6, g: 7},
        {a: [1, 2, 3, 4], b: 2, c: 3, d: 4, e: 5, f: 6, g: 7},
      ),
    ).toBe(true);
    const obj1 = {a: [2, 3], b: [4]};
    const obj2 = {b: [4], a: [2, 3]};
    expect(deepEqual(obj1, obj2)).toBe(true);
    // object.keys
    expect(deepEqual(Object.keys(obj1), Object.keys(obj2))).toBe(false);
    expect(deepEqual(Object.keys(obj1), Object.keys(obj2).reverse())).toBe(
      true,
    );
    expect(deepEqual({a: 2, b: 4}, {a: 2, B: 4})).toBe(false);
    expect(deepEqual({a: 2, b: 4}, {a: 2, b: '4'})).toBe(false);
    expect(deepEqual({a: 2, b: 0}, {a: 2, b: false})).toBe(false);
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

        new Map([[undefined, null]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        new Map([
          [{}, null],
          [true, 2],
          [{}, 1],
          [undefined, {}],
        ]),

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
        new Map([
          [false, 3],
          [{}, 2],
          [{}, 1],
        ]),

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

        new Map([[null, null]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        new Map([[undefined, 3]]),

        new Map([[null, 3]]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        new Map([
          [false, 3],
          [{}, 2],
          [{}, 1],
        ]),

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
        new Map([
          [{}, null],
          [false, 3],
        ]),

        new Map([
          [{}, null],
          [true, 2],
        ]),
      ),
    ).toBe(false);

    expect(
      deepEqual(
        new Map([
          [false, 3],
          [{}, null],
        ]),

        new Map([
          [true, 2],
          [{}, null],
        ]),
      ),
    ).toBe(false);
    expect(
      deepEqual(
        new Map([
          [undefined, null],
          ['+000', 2],
        ]),

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

    expect(deepEqual(new Set([{a: 1}, 2]), new Set(['2', {a: 2}]))).toBe(
      false,
    );
    expect(
      deepEqual(
        new Set([null, '', 1, 5, 2, false]),

        new Set([undefined, 0, '5', true, '2', '-000']),
      ),
    ).toBe(false);
    // TODO: wait fix
    //
    // expect(deepEqual(new Set(), new Map())).toBe(false);
    // let maplikeSet = new Set();
    // Object.defineProperty(maplikeSet, 'constructor', {
    //   enumerable: false,
    //   value: Map,
    // });
    //
    // maplikeSet.__proto__ = Map.prototype; // eslint-disable-line no-proto
    //
    // expect(deepEqual(maplikeSet, new Map())).toBe(false);
  });
  it('not equal', () => {
    expect(deepEqual({x: 5, y: [6]}, {x: 5, y: 6})).toBe(false);
  });
  it('nested nulls', () => {
    expect(deepEqual([null, null, null], [null, null, null])).toBe(true);
  });
  it('objects with strings vs numbers', () => {
    expect(deepEqual([{a: 3}, {b: 4}], [{a: '3'}, {b: '4'}])).toBe(
      false,
    );
  });
  it('non-objects', () => {
    expect(deepEqual(3, 3)).toBe(true);
    expect(deepEqual('beep', 'beep')).toBe(true);

    expect(deepEqual('3', 3)).toBe(false);

    expect(deepEqual('3', [3])).toBe(false);

    expect(deepEqual(3, [3])).toBe(false);
  });
  it('infinities', () => {
    expect(deepEqual(-Infinity, -Infinity)).toBe(true);
    expect(deepEqual(Infinity, Infinity)).toBe(true);
    expect(deepEqual(-Infinity, Infinity)).toBe(false);
    expect(deepEqual(Infinity, -Infinity)).toBe(false);
  });
  it('arguments class', () => {
    function getArgs() {
      return arguments;
    }

    expect(deepEqual(getArgs(1, 2, 3), getArgs(1, 2, 3))).toBe(true);

    expect(deepEqual(getArgs(1, 2, 3), [1, 2, 4])).toBe(false);

  });
});

// WeakMap WeakSet 修改原型
