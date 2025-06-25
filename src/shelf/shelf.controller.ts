import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';

@Controller('shelf')
export class ShelfController {
    constructor(private readonly shelfService: ShelfService) {}

    @Get()
    async findAll() {
        return this.shelfService.findAll();
    }

    @Post()
    async create(@Body() createShelfDto: CreateShelfDto) {
        return this.shelfService.create(createShelfDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateShelfDto: UpdateShelfDto) {
        return this.shelfService.update(id, updateShelfDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.shelfService.remove(id);
    }
}
