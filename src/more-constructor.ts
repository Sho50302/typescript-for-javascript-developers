export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('sho', 27);
console.log(me);
