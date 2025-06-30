import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Injectable()
export class DrugService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.drugs.findMany({ orderBy: [{ createdAt: "desc" }] });
  }

  async findOne(id: string) {
    const result = await this.prisma.drugs.findUnique({ where: { id }});
    return result;
  }

  async create(createDrugDto: CreateDrugDto) {
    await this.prisma.drugs.create({ data: createDrugDto });
    return { message: 'Added drug succesfull!' };
  }

  async update(id: string, updateDrugDto: UpdateDrugDto) {
    await this.prisma.drugs.update({ where: { id }, data: updateDrugDto });
    return { message: 'Update drug succesfully!' };
  }

  async delete(id: string) {
    await this.prisma.drugs.delete({ where: { id } });
    return { message: 'Delete success!' };
  }
}
