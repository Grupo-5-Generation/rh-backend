import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "tb_funcionarios" })

// id, nome, cpf, data_nascimento, data_admissao e salario
export class Funcionarios {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome: string

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    cpf: string

    @IsNotEmpty()
    @Column('decimal', { precision: 8, scale: 2, nullable: false })
    salario: number;

    @UpdateDateColumn()
    data_nascimento: Date

    @UpdateDateColumn()
    data_admissao: Date

    // @ManyToOne(() => Tema, (tema) => tema.postagem, {
    //     onDelete: "CASCADE"
    // })
    // tema: Tema
}