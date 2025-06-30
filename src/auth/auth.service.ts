import { Injectable, UnauthorizedException } from '@nestjs/common';;
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constants';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private readonly jwtService: JwtService) { }

  async login(username: string, pass: string) {
    const user = await this.prisma.users.findFirst({ where: { username: username } });
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, role: user.role };
    // const accessToken = this.jwtService.signAsync(payload, { secret: 'ACCESS_TOKEN_SECRET', expiresIn: '15m' });
    // const refreshToken = this.jwtService.signAsync(payload, { secret: 'REFRESH_TOKEN_SECRET', expiresIn: '7d' });

    return {
      message: 'Success Login!',
      access_token: await this.jwtService.signAsync(payload, {secret: jwtConstants.secret, expiresIn: '15m'})
    };
  }
}
