import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetorModule } from '../setores/setores.module';
import { UsuariosModule } from '../usuario/usuario.module';
import { FuncionariosController } from './controllers/funcionarios.controller';
import { Funcionarios } from './entities/funcionarios.entity';
import { FuncionariosService } from './services/funcionarios.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Funcionarios]),
    SetorModule,
    UsuariosModule,
  ],
  controllers: [FuncionariosController],
  providers: [FuncionariosService],
  exports: [],
})
export class FuncionariosModule {}
