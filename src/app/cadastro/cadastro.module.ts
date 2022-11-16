import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
<<<<<<< HEAD
import { ProatividadeComponent } from './proatividade/proatividade.component';
import { SentimentoComponent } from './sentimento/sentimento.component';
import { ExposicaoComponent } from './exposicao/exposicao.component';
import { ClienteComponent } from './cliente/cliente.component';
=======
import { VeiculoComponent } from './veiculo/veiculo.component';
import { MidiaComponent } from './midia/midia.component';
import { TierComponent } from './tier/tier.component';
import { FatorAlcanceComponent } from './fator-alcance/fator-alcance.component';
>>>>>>> main


@NgModule({
  declarations: [
    UsuarioComponent,
<<<<<<< HEAD
    ProatividadeComponent,
    SentimentoComponent,
    ExposicaoComponent,
    ClienteComponent
=======
    VeiculoComponent,
    MidiaComponent,
    TierComponent,
    FatorAlcanceComponent
>>>>>>> main
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
