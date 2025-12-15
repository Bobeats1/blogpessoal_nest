import { ApiProperty } from "@nestjs/swagger"


// * Essa é uma classe de apoio, será usada apenas para fazer o Login 
 //*  e NÃO será convertida em uma tabela, por isso a ausência de anotações
 

export class UsuarioLogin {

    @ApiProperty()
    public usuario: string

    @ApiProperty()
    public senha: string

}