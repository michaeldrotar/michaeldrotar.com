const toString = Object.prototype.toString;
export default function isPlainObject(object) {
  return toString.call(object) === '[object Object]';
}
