import { IsNotEmpty } from 'class-validator';
import { Funcionarios } from 'src/funcionarios/entities/funcionarios.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_setores' })
export class Setor {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  nome: string;

  @OneToMany(() => Funcionarios, (funcionarios) => funcionarios.setor, {
   
  })
  funcionarios: Funcionarios[];
}
