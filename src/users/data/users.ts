export interface Users {
  userId: number;
  email: string;
  password: string;
}

export const users: Users[] = [
  {
    userId: 1,
    email: 'test1@email.com',
    password: 'test1234',
  },
  {
    userId: 2,
    email: 'test2@email.com',
    password: 'test1232',
  },
  {
    userId: 3,
    email: 'data@email.com',
    password: 'test12345',
  },
];
