import cn from '../index.ts';

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

describe('Mixed values', () => {
  test('mix of strings and falsy values', () => {
    expect(cn('foo', 'bar', null, undefined, false));
  });

  test('mix of strings and numbers', () => {
    expect(cn('foo', 'bar', 0, 2, -1));
  });

  test('nested array', () => {
    expect(cn(['foo', [], '', false, undefined, ['bar', null, [], ['baz', 0]]])).toBe(
      'foo bar baz',
    );
  });
});
