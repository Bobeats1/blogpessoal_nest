import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.module.entity";

@Controller("/postagens")  //Indica que a classe é uma controller 
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) {}

    @Get () // Indica qual tipo de requisição esse método é executado 
    @HttpCode (HttpStatus.OK) // Monta a resposta HTTP para o Front com o status 200 
    findAll(): Promise <Postagem[]> {
        return this.postagemService.findAll ();
    }
}