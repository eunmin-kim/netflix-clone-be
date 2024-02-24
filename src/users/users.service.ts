import { Injectable } from '@nestjs/common';
import createUserDto from './dto/create-user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<any> {
    try {
      return await this.prisma.users.findUnique({
        where: { email: email },
      });
    } catch (error) {
      console.log('Error occurred while finding the user: ', error);
      return null;
    }
  }

  async create(userData: createUserDto) {
    console.log(userData);
    return this.prisma.users.create({
      data: {
        email: userData.email,
        password: userData.password,
      },
    });
  }
}
