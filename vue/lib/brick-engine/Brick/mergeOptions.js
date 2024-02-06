import _ from 'lodash';
import mergeStrategies from './mergeStrategies';

export default function mergeOptions(parent, child, instance) {
  const options = {};

  const keys = _.uniq(Object.keys(parent).concat(Object.keys(child)));
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    const strat = mergeStrategies[key] || mergeStrategies.default;
    options[key] = strat(parent[key], child[key], instance);
  }

  return options;
}
