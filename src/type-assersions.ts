export {};

let name: any = 'aaa';

let length = (name as string).length;
// let length = (<string>name).length; ⇦非推奨

// length = 'foo';
