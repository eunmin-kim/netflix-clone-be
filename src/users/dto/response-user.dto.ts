import { IsEmail, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class UserInfo {
  @IsEmail()
  email: string;
}

export class ResponseUserDto {
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UserInfo)
  userInfo: UserInfo;

  @IsString()
  @IsNotEmpty()
  access_token: string;

  @IsString()
  @IsNotEmpty()
  refresh_token: string;

  constructor(user) {
    this.userInfo = { email: user.user.email };
    this.access_token = user.tokens.access_token;
    this.refresh_token = user.tokens.refresh_token;
  }
}
