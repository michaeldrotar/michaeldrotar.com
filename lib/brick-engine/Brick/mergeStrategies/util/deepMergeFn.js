import deepMerge from '../../../util/deepMerge';

export default function deepMergeFn(parent, child, instance) {
  if (!instance) {
    if (!child) {
      return parent;
    }

    return function deepMergeClassFn() {
      return deepMerge(
        typeof child === 'function' ? child.apply(this, arguments) : child,
        typeof parent === 'function' ? parent.apply(this, arguments) : parent,
      );
    };
  }

  return function deepMergeInstanceFn() {
    let childObject = child;
    if (typeof child === 'function') {
      childObject = child.apply(this, arguments);
    }

    let parentObject = parent;
    if (typeof parent === 'function') {
      parentObject = parent.apply(this, arguments);
    }

    if (!childObject) {
      return parentObject;
    }

    return deepMerge(childObject, parentObject);
  };
}
