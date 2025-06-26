import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.users.findMany({ orderBy: [{createdAt: "desc"}] });
    }

    async create(createUsersDto: CreateUsersDto) {
        try {
            await this.prisma.users.create({ data: createUsersDto });
            return { status: 'Successful', message: 'Create user succesfully!' };
        } catch (error) {
            throw new BadRequestException('Unable to create user: ' + error.message);
        }
    }

    async update(id: string, updateUsersDto: UpdateUsersDto) {
        try {
            await this.prisma.users.update({ where: { id }, data: updateUsersDto });
            return { status: "Successful", message: "Update user successfully!" };
        } catch (error) {
            throw new BadRequestException("Unable to update user: " + error.message);
        }
    }
}
