export type User = {
  name: string;
  age: number;
  email: `${string}@${string}.com`;
  phone?: number;
};

const user: User = {
  name: "Abc",
  age: 23,
};

// Required
export type UserWithRequiredValues = Required<User>;

// Partial
export type UserWithPartialValues = Partial<User>;

// Readonly
export type UserWithReadonlylValues = Readonly<User>;

// 
