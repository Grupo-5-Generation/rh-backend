import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setor } from './setores/entities/setores.entity';
import { SetorModule } from './setores/setores.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_rh',
      entities: [Setor],
      synchronize: true,
    }),
    SetorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
