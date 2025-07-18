import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants/constants';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({ global: true }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
