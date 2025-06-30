import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';

@Injectable()
export class ShelfService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.shelf.findMany({ include: { slot: true }, orderBy: [{ createdAt: "desc" }] });
  }

  async create(createShelfDto: CreateShelfDto) {
    await this.prisma.shelf.create({ data: createShelfDto });
    return { message: 'Create shelf succesfully!' };

  }

  async update(id: string, updateShelfDto: UpdateShelfDto) {
    await this.prisma.shelf.update({ where: { id }, data: updateShelfDto });
    return { message: 'Update shelf succesfully!' };
  }

  async remove(id: string) {
    await this.prisma.shelf.delete({ where: { id } });
    return { message: 'delete succesfully!' };
  }
}
