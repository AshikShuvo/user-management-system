import {ClassSerializerInterceptor, Module} from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import {APP_INTERCEPTOR} from "@nestjs/core";

@Module({
  imports: [PrismaModule, UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
