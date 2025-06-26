import { Optional } from "@nestjs/common";
import { IsOptional, IsString, IsDate, MaxLength } from "class-validator"

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
    @MaxLength(100)
    img: string

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