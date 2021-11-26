export const isString = (value: any) => typeof value === 'string';

export const isPlainObject = (value: any) =>
  Object.prototype.toString.call(value) === '[object Object]';

export const isValidClassName = (value: any) => {
  return value && isString(value);
};
