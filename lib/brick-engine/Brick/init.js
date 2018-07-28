import mergeOptions from './mergeOptions';
import resolveOptions from './resolveOptions';

export function init(options) {
  this.$options = mergeOptions(
    resolveOptions(this.constructor),
    options || {},
    this
  );
}
