import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.module.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable() // Indica que a classe é de serviço e pode ser injetada em outras classes 
export class PostagemService {

// Iniciando ferramentas para a classe de serviço
    constructor(
        @InjectRepository(Postagem) // Pode chamar os métodos da classe Repository
        private postagemRepository: Repository <Postagem>
    ) { }

    async findAll(): Promise <Postagem[]> {

        return await this.postagemRepository.find()
    }


}