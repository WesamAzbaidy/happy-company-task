export interface Items {
  token: string;
  userData: {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
    roleId: string;
  };
}
