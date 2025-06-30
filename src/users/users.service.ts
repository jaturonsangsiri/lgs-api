import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll() {
    return this.prisma.users.findMany({ orderBy: [{ createdAt: "desc" }] });
  }

  async create(createUsersDto: CreateUsersDto) {
    await this.prisma.users.create({ data: createUsersDto });
    return { message: 'Create user succesfully!' };
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    await this.prisma.users.update({ where: { id }, data: updateUsersDto });
    return { message: 'Update user succesfully!' };
  }
}
