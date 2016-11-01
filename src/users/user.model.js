export default class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  format() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
