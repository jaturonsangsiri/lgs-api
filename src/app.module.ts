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
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, ShelfModule, SlotModule, DrugModule, DrugRefillModule, UsersModule, AuthModule],
  controllers: [AppController, SlotController, DrugController, LogController, UsersController],
  providers: [AppService, SlotService, DrugService, LogService, UsersService],
})
export class AppModule {}
