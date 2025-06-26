import { IsOptional, IsString, IsDate, IsEnum, MaxLength } from "class-validator"
import { Role } from "generated/prisma";

export class CreateUsersDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    id: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    username: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    displayName: string;
    
    @IsOptional()
    @IsEnum(Role)
    role: Role;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    password: string;

    @IsOptional()
    @IsDate()
    updatedAt: Date;

    @IsString()
    @IsDate()
    createdAt: Date;
}