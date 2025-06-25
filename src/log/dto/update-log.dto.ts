import { PartialType } from "@nestjs/mapped-types"
import { createLogDto } from "./create-log.dto"

export class UpdateDrugRefillDto extends PartialType(createLogDto) {}