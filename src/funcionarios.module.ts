import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [],
  controllers: [FuncionariosController],
  providers: [FuncionariosServices],
})
export class AppModule {}