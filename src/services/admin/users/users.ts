export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
  roleType: string;
}
export interface IUsers {
  totalUsers: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  users: IUser[];
}
export interface IDeleteUser {
  message: string;
}
export interface IActiveUser {
  message: string;
  user: IUser;
}
export interface IUserEdit {
  name: string;
  email: string;
  password: string;
  roleId: string;
}
export interface IUserAdd {
  name: string;
  email: string;
  password: string;
  roleId: string;
  active: boolean;
}
