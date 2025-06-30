import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Funcionarios } from './funcionarios/entities/funcionarios.entity';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { Setor } from './setores/entities/setores.entity';
import { SetorModule } from './setores/setores.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuariosModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh',
      entities: [Setor, Funcionarios, Usuario],
      synchronize: true,
    }),
    SetorModule,
    FuncionariosModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
