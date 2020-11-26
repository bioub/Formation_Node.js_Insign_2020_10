export interface User {
  id: number;
  name: string;
}

// export interface UserDto {
//   name: string;
// }

// TS : Utility Types (Omit, )
// https://www.typescriptlang.org/docs/handbook/utility-types.html

export type UserDto = Omit<User, 'id'>;