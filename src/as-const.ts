export {};

let name = 'aaa';

name = 'bbb';

let nickname = 'ccc' as const;
nickname = 'ccc';

let profile = {
  name: 'aaa',
  height: 178
} as const;

// profile.name = 'bbb';
// profile.height = 180;
