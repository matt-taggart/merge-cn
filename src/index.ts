import { isPlainObject, isValidClassName } from './utils';
import type { MixedTypeArray } from './types';

export default function mergeClassNames(...values: MixedTypeArray) {
  function merge(values: MixedTypeArray) {
    const ret = [] as MixedTypeArray;

    values.forEach((value) => {
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

      if (isValidClassName(value)) {
        ret.push(value);
      }
    });

    return ret;
  }

  return merge(values).join(' ');
}
