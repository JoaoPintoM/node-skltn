import test from 'tape';
import User from '../../src/user/user.model';

test('should instanciate correctly User class', (t) => {
  const user = new User('foo', 'bar');

  t.equal(user.fname, 'foo', 'should instanciate correctly fname prop');
  t.equal(user.lname, 'bar', 'should instanciate correctly lname prop');

  t.throws(() => {
    const badUser = new User();
    return badUser;
  }, Error, 'should throws Error if bad constructor');

  t.end();
});
