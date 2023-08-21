import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from '../../autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>;
  public exibirPainelCadastro(): void{
    this.exibirPainel.emit('cadastro')
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)
  })

  public usuarioLogin(): void{

   /* let usuario: Autenticacao = new Autenticacao (
      this.formulario.value.email,
      this.formulario.value.senha
    )

    console.log(usuario)*/
  }  

}
