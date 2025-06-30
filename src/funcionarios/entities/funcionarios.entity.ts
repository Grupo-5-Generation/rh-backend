import { IsNotEmpty } from 'class-validator';
import { Setor } from 'src/setores/entities/setores.entity';
import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_funcionarios' })

// id, nome, cpf, data_nascimento, data_admissao e salario
export class Funcionarios {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  cpf: string;

  @IsNotEmpty()
  @Column('decimal', { precision: 19, scale: 4, nullable: false })
  salario: number;

  @UpdateDateColumn()
  data_nascimento: Date;

  @UpdateDateColumn()
  data_admissao: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.funcionarios, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;

  @ManyToOne(() => Setor, (setor) => setor.funcionarios, {
    onDelete: 'CASCADE',
  })
  setor: Setor;
}
