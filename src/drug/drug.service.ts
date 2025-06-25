import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Injectable()
export class DrugService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.drugs.findMany({orderBy: [{createdAt: "desc"}]});
    }

    async create(createDrugDto: CreateDrugDto){
        try {
            await this.prisma.drugs.create({ data: createDrugDto });
            return { status: 'Successful', message: 'Create drug succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to create drug: ' + error.message);
        }
    } 

    async update(id: string, updateDrugDto: UpdateDrugDto) {
        try {
            await this.prisma.drugs.update({where: { id }, data: updateDrugDto });
            return { status: 'Successful', message: 'Update drug succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to update drug: ' + error.message);
        }
    }
    
    async delete(id: string) {
        try {
            await this.prisma.drugs.delete({ where: { id } });
            return { status: 'Successful', message: 'Delete success!' };
        } catch (error) {
            throw new NotFoundException('Unable to delete drug: ' + error.message);
        }
    }
}
