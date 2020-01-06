export class User {
  id: number;
  userName: string;
  userPassword: string;
  userType: UserType;
}

export enum UserType {
  Donor = 1,
  Sponsor,
  SiteAdmin
}
