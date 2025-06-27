import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { Pagamento } from './entities/pagamentos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '3456',
      database: 'db_sistemarh',
      entities: [Pagamento],
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
