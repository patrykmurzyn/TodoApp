import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TodoController],
  imports: [PrismaModule],
  providers: [TodoService]
})
export class TodoModule {}
