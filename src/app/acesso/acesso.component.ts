import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate(-100px, 0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ]),
    trigger('animacao-form',[
      state('criado', style({
        opacity: 1
      })),
      transition('void => criado',[
        style({opacity: 0, transform: 'translate( 100px, 0)'}),
        animate('500ms 1s ease-in-out')
      ])
    ])
  ]
})

export class AcessoComponent {

  public estadoBanner: String = 'criado'
  public estadoForm: String = 'criado'

  public cadastro: boolean = false

  public exibirPainel(event: string): void{
    this.cadastro = event === 'cadastro' ? true : false
  }

  public exibirPainel2(event: string): void{
    this.cadastro = event === 'login' ? true : false
  }
}
