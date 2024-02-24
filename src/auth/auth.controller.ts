import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import CreateUserDto from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { ResponseUserDto } from '../users/dto/response-user.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('join')
  async signUp(@Body() createUserData: CreateUserDto) {
    return this.authService.register(createUserData);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() userLoginData: LoginUserDto) {
    const user = await this.authService.login(userLoginData);
    if (!user) {
      throw new NotFoundException('기록이 없습니다.');
    }
    return new ResponseUserDto(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async profile(@Req() req) {
    return req.user;
  }
}
