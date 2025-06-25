import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { DrugService } from './drug.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Controller('drug')
export class DrugController {
 constructor(private readonly drugService: DrugService) {}

 @Get()
 async findAll() {
    return this.drugService.findAll();
 }

 @Post()
 async create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugService.create(createDrugDto);
 }

 @Patch(':id')
 async update(@Param('id') id: string, @Body() updateDrugDto: UpdateDrugDto) {
    return this.drugService.update(id, updateDrugDto);
 }

 @Delete(':id')
 async delete(@Param('id') id: string) {
    return this.drugService.delete(id);
 }
}
