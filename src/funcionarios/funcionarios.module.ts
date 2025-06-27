import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuncionariosController } from './controllers/funcionarios.controller';
import { Funcionarios } from './entities/funcionarios.entity';
import { FuncionariosService } from './services/funcionarios.service';


@Module({
  imports: [TypeOrmModule.forFeature([Funcionarios])],
  controllers: [FuncionariosController],
  providers: [FuncionariosService],
  exports: [],
})
export class FuncionariosModule { }