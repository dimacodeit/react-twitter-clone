import deepCopy from '../deep-copy';

describe('[utils] deep copy', () => {
  test('check array', () => {
    const original = ['one', 'two', 'three'];
    const cloned = deepCopy(original);

    expect(cloned).not.toBe(original);
    expect(cloned).toEqual(original);
  });

  test('empty arr', () => {
    const original = [];
    const cloned = deepCopy(original);

    expect(cloned).not.toBe(original);
    expect(cloned).toEqual(original);
  });

  test('check object', () => {
    const original = {
      name: 'my name is',
      next: {
        name: 'slim shady',
        next: null,
      },
    };
    const cloned = deepCopy(original);

    expect(cloned).not.toBe(original);
    expect(cloned).toEqual(original);
  });

  test('empty obj', () => {
    const original = {};
    const cloned = deepCopy(original);

    expect(cloned).not.toBe(original);
    expect(cloned).toEqual(original);
  });
});
