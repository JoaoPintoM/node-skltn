import test from 'tape';
import User from '../../src/users/user.model';

function setup() {
  const user = new User(1, 'foo');
  return { user };
}

test('User#constructor', (t) => {
  const { user } = setup();
  t.equal(user.id, 1);
  t.equal(user.name, 'foo');
  t.end();
});

test('User#format', (t) => {
  const { user } = setup();
  t.deepEqual(user.format(), { id: 1, name: 'foo' });
  t.end();
});
