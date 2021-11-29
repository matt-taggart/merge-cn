import { isPlainObject, isString } from './utils';

export default function mergeClassNames(...values) {
  function merge(values) {
    const ret = [];

    values.forEach((value) => {
      if (isString(value)) {
        value && ret.push(value);
      }

      if (Array.isArray(value)) {
        ret.push(...merge(value));
      }

      if (isPlainObject(value)) {
        Object.entries(value).forEach(([key, value]) => {
          if (value) {
            ret.push(key);
          }
        });
      }
    });

    return ret;
  }

  return merge(values).join(' ');
}
