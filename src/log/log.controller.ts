import { Controller, Post, Get, Body, UseGuards, Param } from '@nestjs/common';
import { LogService } from './log.service';
import { createLogDto } from './dto/create-log.dto';
import { AuthGuard, Roles } from 'src/common/guards/auth.guard';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}

    @UseGuards(AuthGuard)
    @Roles('ADMIN','SUPER_ADMIN')
    @Get()
    async findAll() {
        return this.logService.findAll();
    }

    @UseGuards(AuthGuard)
    @Roles('ADMIN','SUPER_ADMIN')
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.logService.findOne(id);
    }


    @UseGuards(AuthGuard)
    @Roles('ADMIN','SUPER_ADMIN')
    @Post()
    async add(@Body() createLogDto: createLogDto) {
        return this.logService.add(createLogDto);
    }
}
