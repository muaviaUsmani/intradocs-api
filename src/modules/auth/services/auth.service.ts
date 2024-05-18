import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../../users/services/user.service';
import { passwordsMatch } from '../../../utilities/helpers/auth';
import { RefreshToken, Token } from '../auth.interfaces';
import { User } from '../../users/user.interfaces';
import { JwtService } from '@nestjs/jwt';

const TOKEN_EXPIRY = '60s';
const REFRESH_TOKEN_EXPIRY = '7 days';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.usersService.getUserByEmail(email);
    if (await passwordsMatch(password, user?.password)) {
      return user;
    }
    return null;
  }

  async loginUser(email: string, password: string): Promise<RefreshToken> {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException(
        'Incorrect email/password. Please try again.',
      );
    }

    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload, { expiresIn: TOKEN_EXPIRY }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: REFRESH_TOKEN_EXPIRY,
      }),
    };
  }

  async validateAndRefreshToken(id: string, email: string): Promise<Token> {
    const payload = { email, id };
    return {
      token: this.jwtService.sign(payload, { expiresIn: TOKEN_EXPIRY }),
    };
  }
}
