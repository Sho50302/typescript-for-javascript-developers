export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owener: string, secretNumber: number) {
    this._owner = owener;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('aaa', 1234567890);
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
