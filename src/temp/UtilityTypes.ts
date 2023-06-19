//www.typescriptlang.org/docs/handbook/utility-types.html

export type User = {
  name: string;
  age: number;
  email: `${string}@${string}.com`; // String literal type
  phone?: number;
};

// Required
export type UserWithRequiredValues = Required<User>;

// Partial
export type UserWithPartialValues = Partial<User>;

// Readonly
export type UserWithReadonlylValues = Readonly<User>;

// Omit
export type UserWithoutEmail = Omit<User, "email">;

// Pick
export type UserWithNameAndPhone = Pick<User, "name" | "phone">;

// String Manipulation types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>
