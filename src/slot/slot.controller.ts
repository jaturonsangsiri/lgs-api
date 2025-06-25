import { Controller, Body, Get, Post, Patch, Delete, Param } from '@nestjs/common';
import { SlotService } from './slot.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Controller('slot')
export class SlotController {
    constructor(private readonly slotService: SlotService) {}
    
    @Get()
    async findAll() {
        return this.slotService.findAll();
    }

    @Post()
    async create(@Body() createShelfDto: CreateSlotDto) {
        return this.slotService.create(createShelfDto);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateShelfDto: UpdateSlotDto) {
        return this.slotService.update(id, updateShelfDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.slotService.remove(id);
    }
}
