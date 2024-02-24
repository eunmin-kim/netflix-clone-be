export class ResponseCreateUserDto {
  email: string;

  constructor(createdUser) {
    this.email = createdUser.email;
  }
}
