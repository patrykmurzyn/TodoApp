import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { UserGuard } from './user.guard';

@Module({
  controllers: [UserController],
  imports: [PrismaModule],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
