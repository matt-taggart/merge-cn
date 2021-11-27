import { isPlainObject, isString } from './utils';
import type { MixedTypeArray } from './types';

export default function mergeClassNames(...values: MixedTypeArray) {
  function merge(values: MixedTypeArray) {
    const ret = [] as MixedTypeArray;

    let len = values.length;
    for (let i = 0; i < len; i++) {
      let value = values[i];
      if (Array.isArray(value)) {
        ret.push(...merge(value));
      }

      if (isPlainObject(value)) {
        for (const key in value) {
          value[key] && ret.push(key);
        }
      }

      if (isString(value)) {
        value && ret.push(value);
      }
    }

    return ret;
  }

  return merge(values).join(' ');
}
