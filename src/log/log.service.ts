import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createLogDto } from './dto/create-log.dto';

@Injectable()
export class LogService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.log.findMany({ orderBy: [{ createdAt: "desc" }] });
  }

  async findOne(id: string) {
    const result = await this.prisma.log.findUnique({ where: { id } });
    return result;
  }

  async add(createLogDto: createLogDto) {
    await this.prisma.log.create({ data: createLogDto });
    return { message: 'Added log succesfull!' };
  }
}
