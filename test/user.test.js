import { default as assert } from 'assert';
import { default as User } from '../src/User';

describe('User', () => {
  const user = new User();

  it('should support class props', () => {
    const actual = user.myProp;
    const expected = 42;
    assert.equal(actual, expected, 'should return this.myProp equals 42');
  });

  it('should support async/await', async () => {
    const actual = await user.fetchUsers();
    const expected = 2;
    assert(actual.length, expected, 'should return an array of 2 users');
  });
});
