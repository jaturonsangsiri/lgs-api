import { Controller, Post, Get, Body } from '@nestjs/common';
import { LogService } from './log.service';
import { createLogDto } from './dto/create-log.dto';

@Controller('log')
export class LogController {
    constructor(private readonly logService: LogService) {}

    @Get()
    async findAll() {
        return this.logService.findAll();
    }

    @Post()
    async add(@Body() createLogDto: createLogDto) {
        return this.logService.add(createLogDto);
    }
}
