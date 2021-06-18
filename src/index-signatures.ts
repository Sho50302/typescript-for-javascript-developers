export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'bbb', underTwenty: false };

profile.name = 'aaa';
profile.age = 27;
profile.nationality = 'Japan';
