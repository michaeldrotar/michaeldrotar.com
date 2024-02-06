import hasOwn from './hasOwn';
import isPlainObject from './isPlainObject';

export default function deepMerge(to, from) {
  if (!from) {
    return to;
  }

  let key, toVal, fromVal;
  const keys = Object.keys(from);
  for (let i = 0, l = keys.length; i < l; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      to[key] = fromVal;
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      deepMerge(toVal, fromVal);
    }
  }

  return to;
}
