import { IsOptional, IsString, IsDate, MaxLength, IsEnum } from "class-validator"
import { SystemLog } from "generated/prisma";

export class createLogDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    id: string;

    @IsOptional()
    @IsEnum(SystemLog)
    type: SystemLog;

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    updatedBy: string;
}