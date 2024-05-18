import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserModule } from '../users/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshStrategy } from './strategies/refresh.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './guards/jwt.guard';
import { AuthResolver } from './graphql/auth.resolver';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.APP_KEY,
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    JwtStrategy,
    RefreshStrategy,
    { provide: 'APP_GUARD', useClass: JwtAuthGuard },
  ],
})
export class AuthModule {}
