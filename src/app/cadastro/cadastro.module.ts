import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { VeiculoComponent } from './veiculo/veiculo.component';
import { MidiaComponent } from './midia/midia.component';
import { TierComponent } from './tier/tier.component';
import { FatorAlcanceComponent } from './fator-alcance/fator-alcance.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    VeiculoComponent,
    MidiaComponent,
    TierComponent,
    FatorAlcanceComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
