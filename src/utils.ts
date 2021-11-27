const toString = Object.prototype.toString;
const IS_OBJECT = '[object Object]';

export const isString = (value: any) => typeof value === 'string';

export const isPlainObject = (value: any) => toString.call(value) === IS_OBJECT;
