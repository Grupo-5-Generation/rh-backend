/* eslint-disable @typescript-eslint/no-unsafe-return */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Funcionarios } from "../entities/funcionarios.entity";
// import { TemaService } from "src/tema/services/tema.service" - entidade dependente;

@Injectable()
export class FuncionariosService {
    constructor(
        @InjectRepository(Funcionarios)
        private funcionariosRepository: Repository<Funcionarios>,
        // private temaService:TemaService
    ) { }

    async findAll(): Promise<Funcionarios[]> {
        return await this.funcionariosRepository.find({
            // relations: {
            //     tema: true
            // }
        });
    }

    async findById(id: number): Promise<Funcionarios> {
        const funcionarios = await this.funcionariosRepository.findOne({
            where: {
                id,
            },
            
        });

        if (!funcionarios)
            throw new HttpException('Funcionário não encontrado!', HttpStatus.NOT_FOUND);

        return funcionarios;
    }

    async findAllByNome(nome: string): Promise<Funcionarios[]> {
        return await this.funcionariosRepository.find({
            where: {
                nome : ILike(`%${nome}%`)
            },
        })
    }

    async create(funcionarios: Funcionarios): Promise<Funcionarios> {
        return await this.funcionariosRepository.save(funcionarios);
    }

    async update(funcionarios: Funcionarios): Promise<Funcionarios> {
        await this.findById(funcionarios.id)

        // await this.temaService.findById(postagem.tema.id)

        return await this.funcionariosRepository.save(funcionarios);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id)
        return await this.funcionariosRepository.delete(id)
    }
}