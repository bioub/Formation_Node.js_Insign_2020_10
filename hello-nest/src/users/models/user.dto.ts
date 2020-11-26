// export interface UserDto {
//   name: string;
// }

import { User } from "./user.entity";

// TS : Utility Types (Omit, )
// https://www.typescriptlang.org/docs/handbook/utility-types.html

export type UserDto = Omit<User, 'id'>;