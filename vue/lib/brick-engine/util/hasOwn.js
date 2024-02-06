const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function hasOwn(object, key) {
  return hasOwnProperty.call(object, key);
}
