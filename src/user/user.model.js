export default class User {
  constructor(fname, lname) {
    if (!fname || !lname) {
      throw new Error('bad constructor');
    }

    this.fname = fname;
    this.lname = lname;
  }
}
