import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { SetorService } from '../../setores/services/setores.services';
import { UsuarioService } from '../../usuario/services/usuario.services';
import { Funcionarios } from '../entities/funcionarios.entity';

@Injectable()
export class FuncionariosService {
  constructor(
    @InjectRepository(Funcionarios)
    private funcionariosRepository: Repository<Funcionarios>,
    private usuarioService: UsuarioService,
    private setorService: SetorService,
  ) {}

  async findAll(): Promise<Funcionarios[]> {
    return await this.funcionariosRepository.find({
      relations: {
        usuario: true,
        setor: true,
      },
    });
  }

  async findById(id: number): Promise<Funcionarios> {
    const funcionarios = await this.funcionariosRepository.findOne({
      where: {
        id,
      },
    });

    if (!funcionarios)
      throw new HttpException(
        'Funcionário não encontrado!',
        HttpStatus.NOT_FOUND,
      );

    return funcionarios;
  }

  async findAllByNome(nome: string): Promise<Funcionarios[]> {
    return await this.funcionariosRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(funcionarios: Funcionarios): Promise<Funcionarios> {
    return await this.funcionariosRepository.save(funcionarios);
  }

  async update(funcionarios: Funcionarios): Promise<Funcionarios> {
    await this.findById(funcionarios.id);
    await this.usuarioService.findById(funcionarios.usuario.id);
    await this.setorService.findById(funcionarios.setor.id);

    return await this.funcionariosRepository.save(funcionarios);
  }

  async calculoSalario(id: number): Promise<Funcionarios> {
    const funcionario: Funcionarios = await this.findById(id);
    funcionario.salario = funcionario.salario + (funcionario.salario * 0.1);

    return await this.funcionariosRepository.save(funcionario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.funcionariosRepository.delete(id);
  }
}
