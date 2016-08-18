export default class User {
  constructor() {
    this.myProp = 42;
  }
  fetchUsers() {
    return new Promise(resolve => {
      const users = [
        { id: 1, name: 'Homer Simpson' },
        { id: 2, name: 'Foo Bar' },
      ];
      resolve(users);
    });
  }
}
