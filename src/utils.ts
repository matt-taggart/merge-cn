export const isString = (value: any) => typeof value === "string";

export const isObject = (value: any) => Object.prototype.toString.call(value);

export const isNil = (value: any) => value == null;
