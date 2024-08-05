interface Role {
  id: string;
  type: string;
}
interface country {
  id: string;
  name: string;
  code: string;
}
export interface Lookups {
  countries: country[];
  roles: Role[];
}
