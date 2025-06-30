import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FuncionariosService } from 'src/funcionarios/services/funcionarios.service';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private funcionariosService: FuncionariosService,
  ) { }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: {
        funcionarios: true,
      },
    });
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
    });

    if (!usuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);
    return usuario;
  }

  async findAllByNome(nome: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    await this.findById(usuario.id);
    await this.funcionariosService.findById(usuario.funcionarios.id);
    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.usuarioRepository.delete(id);
  }
}
