import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Injectable()
export class SlotService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.slot.findMany({ orderBy: [{createdAt: "desc"}] });
    }

    async create(createSlotDto: CreateSlotDto) {
        try {
            await this.prisma.slot.create({ data: createSlotDto });
            return { status: 'Successful', message: 'Create slot succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to create slot: ' + error.message);
        }
    }

    async update(id: string, updateSlotDto: UpdateSlotDto) {
        try {
            await this.prisma.slot.update({where: { id }, data: updateSlotDto });
            return { status: 'Successful', message: 'Update slot succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to update slot: ' + error.message);
        }
    }

    async remove(id: string) {
        try {
            await this.prisma.slot.delete({where: { id }});
            return { status: 'Successful', message: 'delete succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to delete slot: ' + error.message);
        }
    }
}
