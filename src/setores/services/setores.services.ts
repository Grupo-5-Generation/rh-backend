import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FuncionariosService } from 'src/funcionarios/services/funcionarios.service';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Setor } from '../entities/setores.entity';

@Injectable()
export class SetorService {
  constructor(
    @InjectRepository(Setor)
    private setorRepository: Repository<Setor>,
    private funcionariosService: FuncionariosService,
  ) { }

  async findAll(): Promise<Setor[]> {
    return await this.setorRepository.find({
      relations: {
        funcionarios: true,
      },
    });
  }

  async findById(id: number): Promise<Setor> {
    const setor = await this.setorRepository.findOne({
      where: {
        id,
      },
    });
    if (!setor)
      throw new HttpException('Setor não encontrado!', HttpStatus.NOT_FOUND);
    return setor;
  }

  async findAllByNome(nome: string): Promise<Setor[]> {
    return await this.setorRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(setor: Setor): Promise<Setor> {
    return await this.setorRepository.save(setor);
  }

  async update(setor: Setor): Promise<Setor> {
    await this.findById(setor.id);
    await this.funcionariosService.findById(setor.funcionarios.id);

    return await this.setorRepository.save(setor);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.setorRepository.delete(id);
  }
}
