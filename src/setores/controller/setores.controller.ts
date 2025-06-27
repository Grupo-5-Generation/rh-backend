import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Setor } from '../entities/setores.entity';
import { SetorService } from '../services/setores.services';

@Controller('/setores')
export class SetorController {
  constructor(private readonly SetorService: SetorService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Setor[]> {
    return this.SetorService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Setor> {
    return this.SetorService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findAllByTipo(@Param('nome') nome: string): Promise<Setor[]> {
    return this.SetorService.findAllByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() Setor: Setor): Promise<Setor> {
    return this.SetorService.create(Setor);
  }
  @Put()
  @HttpCode(HttpStatus.CREATED)
  update(@Body() Setor: Setor): Promise<Setor> {
    return this.SetorService.create(Setor);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.SetorService.delete(id);
  }
}
