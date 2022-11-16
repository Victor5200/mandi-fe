import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProatividadeComponent } from './proatividade/proatividade.component';
import { SentimentoComponent } from './sentimento/sentimento.component';
import { ExposicaoComponent } from './exposicao/exposicao.component';
import { ClienteComponent } from './cliente/cliente.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    ProatividadeComponent,
    SentimentoComponent,
    ExposicaoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
