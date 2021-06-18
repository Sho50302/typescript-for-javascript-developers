export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('aaa', 25);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['bbb', 50];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
