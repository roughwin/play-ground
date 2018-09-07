class A {
  static helo = [];
  constructor() {
    console.log('this is constructor', this.helo)
  }
  push() {
    this.helo.push('x');
  }
}

const a = new A();
// a.push()
const b = new A();
// b.push()