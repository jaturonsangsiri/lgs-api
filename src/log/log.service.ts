import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createLogDto } from './dto/create-log.dto';

@Injectable()
export class LogService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.log.findMany({orderBy: [{createdAt: "desc"}]});
    }

    async add(createLogDto: createLogDto) {
        try {
            await this.prisma.log.create({ data: createLogDto });
            return { status: 'Successful', message: 'Added log succesfull!' };
        } catch (error) {
            throw new BadRequestException('Unable to add log: ' + error.message);
        }
    }
}
