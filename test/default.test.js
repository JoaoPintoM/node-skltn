import { default as assert } from 'assert';

describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 if value is not present', () => {
      const actual = [1, 2, 3].indexOf(4);
      const expected = -1;
      assert.equal(actual, expected,
        '#indexOf() should return -1 if value is not present');
    });
  });
});
