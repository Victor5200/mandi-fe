import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProatividadeComponent } from './proatividade/proatividade.component';
import { SentimentoComponent } from './sentimento/sentimento.component';
import { ExposicaoComponent } from './exposicao/exposicao.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { MidiaComponent } from './midia/midia.component';
import { TierComponent } from './tier/tier.component';
import { FatorAlcanceComponent } from './fator-alcance/fator-alcance.component';
<<<<<<< Updated upstream
import { ProjetosComponent } from './projetos/projetos.component';
import { PautaComponent } from './pauta/pauta.component';
=======
import { PilarComponent } from './pilar/pilar.component';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    UsuarioComponent,
    ProatividadeComponent,
    SentimentoComponent,
    ExposicaoComponent,
    ClienteComponent,
    VeiculoComponent,
    MidiaComponent,
    TierComponent,
    FatorAlcanceComponent,
<<<<<<< Updated upstream
    ProjetosComponent,
    PautaComponent
=======
    PilarComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
