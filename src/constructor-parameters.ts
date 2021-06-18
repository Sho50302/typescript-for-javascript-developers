export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['aaa', 25];
const aaa = new Person(...profile);
console.log(aaa);

type MyConstructorParameters<
  T extends new (...args: any) => any
  > = T extends new (...args: infer P) => any ? P : never;
