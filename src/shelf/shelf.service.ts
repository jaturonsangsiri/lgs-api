import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateShelfDto } from './dto/create-shelf.dto';
import { UpdateShelfDto } from './dto/update-shelf.dto';

@Injectable()
export class ShelfService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.shelf.findMany({ 
            include: {slot: true}, 
            orderBy: [{createdAt: "desc"}] });
    }

    async create(createShelfDto: CreateShelfDto) {
        try {
            await this.prisma.shelf.create({ data: createShelfDto });
            return { status: 'Successful', message: 'Create shelf succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to create shelf: ' + error.message);
        }
    }

    async update(id: string, updateShelfDto: UpdateShelfDto) {
        try {
            await this.prisma.shelf.update({where: { id }, data: updateShelfDto });
            return { status: 'Successful', message: 'Update shelf succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to update shelf: ' + error.message);
        }
    }

    async remove(id: string) {
        try {
            await this.prisma.shelf.delete({where: { id }});
            return { status: 'Successful', message: 'delete succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to delete shelf: ' + error.message);
        }
    }
}
