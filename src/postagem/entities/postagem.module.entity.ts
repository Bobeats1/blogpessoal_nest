import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "db_postagens"}) // Indica que a classe é uma entidade/ Model
export class Postagem {

    @PrimaryGeneratedColumn ()  // Chave Primária e auto increment 
    id: number;

    @IsNotEmpty() // Validador de Objeto 
    @Column({ length: 100, nullable: false }) //Regra do NOT NULL 
    titulo: string;

    @IsNotEmpty() // Validador de Objeto 
    @Column({ length: 1000, nullable: false }) //Regra do NOT NULL 
    texto: string;

    @UpdateDateColumn()
    data: Date;
}