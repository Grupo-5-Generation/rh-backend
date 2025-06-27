import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_pagamentos"})
export class Pagamento {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({nullable: false})
    horas_contratadas: number

    @IsNotEmpty()
    @Column({nullable: false})
    horas_trabalhadas: number

    @IsNotEmpty()
    @Column ('decimal', { precision: 5, scale: 2, nullable: false })
    salario: number
    
}