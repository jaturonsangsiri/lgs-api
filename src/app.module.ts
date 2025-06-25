import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShelfModule } from './shelf/shelf.module';
import { SlotController } from './slot/slot.controller';
import { SlotService } from './slot/slot.service';
import { SlotModule } from './slot/slot.module';
import { DrugController } from './drug/drug.controller';
import { DrugService } from './drug/drug.service';
import { DrugModule } from './drug/drug.module';
import { LogController } from './log/log.controller';
import { DrugRefillModule } from './log/log.module';
import { LogService } from './log/log.service';

@Module({
  imports: [PrismaModule, ShelfModule, SlotModule, DrugModule, DrugRefillModule],
  controllers: [AppController, SlotController, DrugController, LogController],
  providers: [AppService, SlotService, DrugService, LogService],
})
export class AppModule {}
