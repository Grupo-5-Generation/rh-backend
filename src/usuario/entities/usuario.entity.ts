import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Funcionarios } from '../../funcionarios/entities/funcionarios.entity';

@Entity({ name: 'tb_usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  foto: string;

  @OneToMany(() => Funcionarios, (funcionarios) => funcionarios.usuario, {
    onDelete: 'CASCADE',
  })
  funcionarios: Funcionarios;
}
