import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetorController } from './controller/setores.controller';
import { Setor } from './entities/setores.entity';
import { SetorService } from './services/setores.services';

@Module({
  imports: [TypeOrmModule.forFeature([Setor])],
  providers: [SetorService],
  controllers: [SetorController],
  exports: [],
})
export class SetorModule {}
