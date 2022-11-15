import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { CadastroAtividadeComponent } from './cadastro-atividade/cadastro-atividade.component';
import { AcompanharAtividadeComponent } from './acompanhar-atividade/acompanhar-atividade.component';


@NgModule({
  declarations: [
    CadastroAtividadeComponent,
    AcompanharAtividadeComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ]
})
export class AtendimentoModule { }
