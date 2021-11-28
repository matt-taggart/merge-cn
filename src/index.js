export default function mergeClassNames() {
  function merge(values, str) {
    var i = 0,
      value,
      tmp = '',
      merged = '',
      len = values.length;
    while (i < len) {
      value = values[i++];
      if (typeof value === 'string' || typeof value === 'number') {
        tmp += (value && tmp && ' ') + value;
      } else {
        if (Array.isArray(value)) {
          merged = merge(value, '');
          if (merged) {
            tmp += (tmp && ' ') + merged;
          }
        } else if (typeof value === 'object' && value !== null) {
          for (var key in value) {
            if (value[key]) {
              tmp += (tmp && ' ') + key;
            }
          }
        }
      }
    }
    str = tmp;

    return str;
  }

  return merge(arguments, '');
}
