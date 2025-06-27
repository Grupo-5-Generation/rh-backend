import { IsNotEmpty } from "class-validator";
import { Funcionarios } from "src/tema/entities/funcionarios.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_funcionarios"})

// id, nome, cpf, data_nascimento e data_admissao
export class Funcionarios {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    cpf: string

    @UpdateDateColumn()
    data_nascimento: Date

    @UpdateDateColumn()
    data_admissao: Date

    // @ManyToOne(() => Tema, (tema) => tema.postagem, {
    //     onDelete: "CASCADE"
    // })
    // tema: Tema
}