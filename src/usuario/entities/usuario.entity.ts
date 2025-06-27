import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
