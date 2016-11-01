import assert from 'assert';
import User from '../../src/users/user.model';

describe('User', () => {
  const name = 'x';
  const id = 1;
  const user = new User(id, name);

  it('should construct correctly', () => {
    assert.equal(user.id, 1);
    assert.equal(user.name, 'x');
  });

  it('should return correct format', () => {
    const expected = {
      id: 1,
      name: 'x',
    };
    assert.deepEqual(user.format(), expected);
  });
});
