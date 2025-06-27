import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { FuncionariosController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [TypeOrmModule.forFeature([Funcionarios])],
  controllers: [FuncionariosController],
  providers: [FuncionariosServices],
})
export class AppModule {}