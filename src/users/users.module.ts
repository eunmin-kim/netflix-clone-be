import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { users } from './data/users';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'TEST_USER',
      useValue: users,
    },
    PrismaService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
