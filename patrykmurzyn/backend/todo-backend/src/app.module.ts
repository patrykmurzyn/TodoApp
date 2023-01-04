import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { CoreModule } from './modules/core/core.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodoModule,
    PrismaModule,
    UserModule,
    CoreModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    },)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
