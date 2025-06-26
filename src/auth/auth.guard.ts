import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
import { Reflector } from '@nestjs/core';
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';
import { jwtConstants } from 'src/constants/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService, private readonly reflector: Reflector) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException('Token not found!');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, { secret: jwtConstants.secret });
    
      // เก็บข้อมูลผู้ใช้ใน request object เพื่อใช้ใน controller
      request.user = payload;

      // ตรวจสอบ roles
      const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler()) || this.reflector.get<string[]>('roles', context.getClass());
      if (requiredRoles && requiredRoles.length > 0) {
        const hasRequiredRole = requiredRoles.includes(payload.role);
        if (!hasRequiredRole) {
          throw new UnauthorizedException('Insufficient permissions');
        }
      }
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}