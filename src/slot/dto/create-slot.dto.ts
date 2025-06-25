import { IsOptional, IsString, IsDate, IsEnum, IsNumber, MaxLength } from "class-validator"
import { SlotStatus } from "generated/prisma";
import { Optional } from "@nestjs/common";

export class CreateSlotDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    id: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    shelfId: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    drugId: string;

    @IsOptional()
    @IsString()
    @MaxLength(150)
    name: string;

    @Optional()
    @IsNumber()
    @MaxLength(7)
    quantity: number

    @IsOptional()
    @IsEnum(SlotStatus)
    status: SlotStatus;

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