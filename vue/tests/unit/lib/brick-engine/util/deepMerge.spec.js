import { expect } from 'chai';
import deepMerge from '../../../../../lib/brick-engine/util/deepMerge';

describe('deepMerge', () => {
  it('skips merging if nothing to merge with', () => {
    const to = {};
    expect(deepMerge(to)).to.equal(to);
  });
});
