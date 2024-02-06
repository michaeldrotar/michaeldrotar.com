import mergeOptions from 'mergeOptions';

export function resolveOptions(Brick) {
  if (Brick.super) {
    const superOptions = resolveOptions(Brick.super);
    if (superOptions !== Brick.superOptions) {
      Brick.superOptions = superOptions;
      Brick.options = mergeOptions(superOptions, Brick.extendOptions);
    }
  }
  return Brick.options;
}
