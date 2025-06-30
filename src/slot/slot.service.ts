import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Injectable()
export class SlotService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.slot.findMany({ orderBy: [{ createdAt: "desc" }] });
  }

  async create(createSlotDto: CreateSlotDto) {
    await this.prisma.slot.create({ data: createSlotDto });
    return { message: 'Create slot succesfully!' };
  }

  async update(id: string, updateSlotDto: UpdateSlotDto) {
    await this.prisma.slot.update({ where: { id }, data: updateSlotDto });
    return { message: 'Update slot succesfully!' };

  }

  async remove(id: string) {
    await this.prisma.slot.delete({ where: { id } });
    return { message: 'delete succesfully!' };
  }
}
