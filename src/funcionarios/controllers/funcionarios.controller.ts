import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Funcionarios } from "../../entities/funcionarios.entity";
import { FuncionariosService } from "../services/funcionarios.service";

@Controller("/funcionarios")
export class FuncionariosController {
    constructor(private readonly funcionariosService: FuncionariosService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Funcionarios[]> {
        return this.funcionariosService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Funcionarios> {
        return this.funcionariosService.findById(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByAllTitulo(@Param('titulo') titulo: string): Promise<Funcionarios[]> {
        return this.funcionariosService.findAllByTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() funcionarios: funcionarios): Promise<Funcionarios> {
        return this.funcionariosService.create(funcionarios);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() funcionarios: funcionarios): Promise<Funcionarios> {
        return this.funcionariosService.update(funcionarios);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.funcionariosService.delete(id);
    }
}