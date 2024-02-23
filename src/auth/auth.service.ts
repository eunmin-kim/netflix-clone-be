import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import CreateUserDto from '../users/dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      result: {
        access_token: this.jwtService.sign(payload, { expiresIn: '60s' }),
        refresh_token: this.jwtService.sign(payload, { expiresIn: '1d' }),
      },
    };
  }

  async register(userData: CreateUserDto) {
    //   이미 존재하는 유저인지 확인
    const existingUser = await this.usersService.findOne(userData.email);
    if (existingUser) {
      throw new HttpException('User already exists', 400);
    }
    // 존재하지 않으면 생성
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const createdUser = await this.usersService.create({
      ...userData,
      password: hashedPassword,
    });
    createdUser.password = '';
    return createdUser;
  }
}
