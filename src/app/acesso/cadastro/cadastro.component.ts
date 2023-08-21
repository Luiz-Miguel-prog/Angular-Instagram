import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';
import { Usuario } from '../usuario.module';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {

  constructor(
    private autenticacao: Autenticacao
  ) {} /* 3º Em "cadastro.component.ts", Dentro de "export class CadastroComponent {}" foi inserido o constructor: 
    "constructor(
    private autenticacao: Autenticacao
  ) {}" */

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()
  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  })

  public cadastrarUsuario(): void{
    // console.log(this.formulario)
    let usuario: Usuario = new Usuario (
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastroUsuario(usuario)  /* 4º Em "cadastro.component.ts", Dentro de "export class CadastroComponent {}" foi inserido o método: 
            "public cadastrarUsuario(): void{
              // console.log(this.formulario)

              let usuario: Usuario = new Usuario (
                this.formulario.value.email,
                this.formulario.value.nome_completo,
                this.formulario.value.nome_usuario,
                this.formulario.value.senha
              )
                this.autenticacao.cadastroUsuario(usuario) " */

  }  
}
