export const isString = (value) => typeof value === 'string';

export const isPlainObject = (value) =>
  Object.prototype.toString.call(value) === '[object Object]';
