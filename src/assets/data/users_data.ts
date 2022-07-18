export interface UserType {
  branchId: number;
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  position: string;
}

export interface UserDetails {
  branchId: number;
  userName: string;
  password: string;
}

export const users: UserType[] = [
  {
    branchId: 10001,
    userName: "testuser01",
    password: "pa55w0rd001",
    firstName: "John",
    middleName: "Sanchez",
    lastName: "Doe",
    position: "Developer",
  },
  {
    branchId: 10002,
    userName: "testuser02",
    password: "pa55w0rd002",
    firstName: "Ricardo",
    middleName: "Dubov",
    lastName: "Martinez",
    position: "Lead Developer",
  },
  {
    branchId: 10003,
    userName: "testuser03",
    password: "pa55w0rd003",
    firstName: "Gol",
    middleName: "Denver",
    lastName: "Roger",
    position: "Project Manager",
  },
];