type AllowedCompanies = "amberstudent" | "Gmail" | "AbcDef";

type AllowedCompaniesLowercase = Lowercase<AllowedCompanies>;
type AllowedCompaniesUppercase = Uppercase<AllowedCompanies>;
type AllowedCompaniesCapitalize = Uncapitalize<AllowedCompanies>;

type UserType = {
  name: string;
  age?: number;
  email: `${string}@${AllowedCompanies}.com`;
  address?: string;
};

type UserTypeWithAllFieldsRequired = Required<UserType>;

type UserTypeWithAllFieldsOptional = Partial<UserType>;

type UserTypeWithReadOnly = Readonly<UserType>;

type UserTypeWithNameAndAge = Pick<UserType, "name" | "age">;

type UserTypeWithoutAddress = Omit<UserType, "address">;

const User: UserTypeWithReadOnly = {
  name: "Abc",
  age: 23,
  email: "abc@gmail.com",
};
