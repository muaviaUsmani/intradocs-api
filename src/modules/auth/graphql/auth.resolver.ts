import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from '../services/auth.service';
import { LoginInput } from './auth.inputs';
import { RefreshToken, Token } from './auth.model';
import { Public } from '../../../utilities/decorators/public.decorator';
import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guards/refresh.guard';
import { CurrentUser } from '../../../utilities/decorators/user.decorator';
import { User } from '../../users/graphql/user.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => RefreshToken)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Public()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => RefreshToken)
  async login(@Args('input') credentials: LoginInput) {
    const tokens = await this.authService.loginUser(
      credentials.email,
      credentials.password,
    );

    return tokens;
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Token)
  async refreshToken(@CurrentUser() user: User) {
    return this.authService.validateAndRefreshToken(user.id, user.email);
  }
}
