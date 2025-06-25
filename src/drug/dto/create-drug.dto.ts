import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsOptional, IsString, IsNumber, IsDate, IsEnum, MaxLength } from "class-validator"
import { Shelf, Drugs, SlotStatus } from "generated/prisma";

export class CreateDrugDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    id: string;

    @Optional()
    @IsString()
    @MaxLength(150)
    name: string;

    @Optional()
    @IsString()
    @MaxLength(150)
    dose: string

    @Optional()
    @IsString()
    @MaxLength(150)
    purpose: string

    @Optional()
    @IsString()
    @MaxLength(100)
    unit: string

    @Optional()
    @IsString()
    @MaxLength(150)
    usage: string

    @Optional()
    @IsString()
    @MaxLength(150)
    warning: string

    @Optional()
    @IsString()
    @MaxLength(150)
    note: string

    @Optional()
    @IsString()
    @MaxLength(150)
    documents: string

    @IsOptional()
    @IsDate()
    createdAt: Date;

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}