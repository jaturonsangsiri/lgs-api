import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsEnum, MaxLength } from "class-validator"
import { ShelfStatus, ShelfType } from "generated/prisma";

export class CreateShelfDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    id: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    name: string;

    @IsOptional()
    @IsEnum(ShelfType)
    type: ShelfType;

    @IsOptional()
    @IsEnum(ShelfStatus)
    status: ShelfStatus;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;

    @IsString()
    @IsOptional()
    updatedBy: string;
}