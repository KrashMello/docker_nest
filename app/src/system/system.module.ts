import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { RouteGuard } from 'src/guard/route.guard';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesModule } from './roles/roles.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [UserModule, AuthModule, RolesModule, StatusModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RouteGuard,
    },
  ],
})
export class SystemModule {}
