import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.module.entity";
import { get } from "http";

@Controller("/postagens")  //Indica que a classe é uma controller 
export class PostagemController {

    constructor(private readonly postagemService: PostagemService) {}

    @Get () // Indica qual tipo de requisição esse método é executado 
    @HttpCode (HttpStatus.OK) // Monta a resposta HTTP para o Front com o status 200 
    findAll(): Promise <Postagem[]> {
        return this.postagemService.findAll ();
    }

    @Get ("/:id")
    @HttpCode (HttpStatus.OK)
    FindById(@Param('id', ParseIntPipe) id: number): Promise <Postagem> {
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo') //Get com acesso em /postagens/titulo/{texto}
    @HttpCode(HttpStatus.OK)
    findAllByTitulo(@Param('titulo') titulo: string): Promise <Postagem[]>{
        return this.postagemService.findAllByTitulo(titulo);
    }

    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise <Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise <Postagem>{
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    }

}