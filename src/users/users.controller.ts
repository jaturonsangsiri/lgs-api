import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { AuthGuard, Roles } from 'src/common/guards/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UsersService) {}

    @UseGuards(AuthGuard)
    @Roles('ADMIN','SUPER_ADMIN')
    @Get()
    async findAll() {
        return this.userservice.findAll();
    }

    @Post()
    async create(@Body() createUsersDto: CreateUsersDto) {
        return this.userservice.create(createUsersDto);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
        return this.userservice.update(id, updateUsersDto); 
    }
}
