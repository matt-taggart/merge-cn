import cn from '..';

describe('Strings', () => {
  test('single word string', () => {
    expect(cn('foo')).toBe('foo');
  });

  test('multiple word string', () => {
    expect(cn('foo bar baz')).toBe('foo bar baz');
  });

  test('multiple string arguments', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
  });
});

describe('Numbers', () => {
  test('single number', () => {
    expect(cn(5)).toBe('');
  });

  test('multiple number arguments', () => {
    expect(cn(5, 7)).toBe('');
  });
});

describe('Booleans', () => {
  test('single boolean', () => {
    expect(cn(false)).toBe('');
  });

  test('multiple boolean arguments', () => {
    expect(cn(false, true)).toBe('');
  });
});

describe('Falsy values', () => {
  test('undefined', () => {
    expect(cn(undefined)).toBe('');
  });

  test('multiple undefined arguments', () => {
    expect(cn(undefined, undefined)).toBe('');
  });

  test('null', () => {
    expect(cn(null)).toBe('');
  });

  test('multiple null arguments', () => {
    expect(cn(null, null)).toBe('');
  });

  test('empty string', () => {
    expect(cn('')).toBe('');
  });

  test('multiple empty strings', () => {
    expect(cn('', '')).toBe('');
  });
});

describe('Arrays', () => {
  test('empty array', () => {
    expect(cn([])).toBe('');
  });

  test('single string argument array', () => {
    expect(cn(['foo'])).toBe('foo');
  });

  test('multiple string argument array', () => {
    expect(cn(['foo', 'bar', 'baz'])).toBe('foo bar baz');
  });
});

describe('Object', () => {
  test('empty object', () => {
    expect(cn({})).toBe('');
  });

  test('single truthy value', () => {
    expect(cn({ foo: true })).toBe('foo');
  });

  test('single falsy value', () => {
    expect(cn({ foo: false })).toBe('');
  });

  test('multiple truthy key-value pairs passed as one argument', () => {
    expect(cn({ foo: true, bar: true })).toBe('foo bar');
  });

  test('multiple truthy key-value pairs passed as multiple arguments', () => {
    expect(cn({ foo: true }, { bar: true })).toBe('foo bar');
  });

  test('multiple falsy key-value pairs passed as one argument', () => {
    expect(cn({ foo: false, bar: null, baz: undefined, qux: '', quux: 0 })).toBe('');
  });

  test('multiple falsy key-value pairs passed as multiple arguments', () => {
    expect(
      cn({ foo: false }, { bar: null }, { baz: undefined }, { qux: '' }, { quux: 0 }),
    ).toBe('');
  });

  test('mix of truthy and falsy key-value pairs', () => {
    expect(
      cn(
        { foo: true, bar: false },
        { foo: '', bar: true },
        { foo: 0, bar: null, baz: true },
      ),
    ).toBe('foo bar baz');
  });
});

describe('Mixed values', () => {
  test('strings and falsy values', () => {
    expect(cn('foo', 'bar', null, undefined, false));
  });

  test('strings and numbers', () => {
    expect(cn('foo', 'bar', 0, 2, -1));
  });

  test('nested array', () => {
    expect(cn(['foo', [], '', false, undefined, ['bar', null, [], ['baz', 0]]])).toBe(
      'foo bar baz',
    );
  });
});
