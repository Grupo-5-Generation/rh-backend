import { Module } from '@nestjs/common';
import { UsuarioController } from './controller/usuario.controller';
import { UsuarioService } from './services/usuario.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { FuncionariosModule } from '../funcionarios/funcionarios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), FuncionariosModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [],
})
export class UsuariosModule {}
