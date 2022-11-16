import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UsuarioComponent} from "./usuario/usuario.component";
import {VeiculoComponent} from "./veiculo/veiculo.component";
import {MidiaComponent} from "./midia/midia.component";
import {TierComponent} from "./tier/tier.component";
import {FatorAlcanceComponent} from "./fator-alcance/fator-alcance.component";
import {SentimentoComponent} from "./sentimento/sentimento.component";
import {ProatividadeComponent} from "./proatividade/proatividade.component";
import {ExposicaoComponent} from "./exposicao/exposicao.component";
import {ClienteComponent} from "./cliente/cliente.component";

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent},
  { path: 'sentimento', component: SentimentoComponent},
  { path: 'proatividade', component: ProatividadeComponent},
  { path: 'exposicao', component: ExposicaoComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'veiculo', component: VeiculoComponent},
  { path: 'midia', component: MidiaComponent},
  { path: 'tier', component: TierComponent},
  { path: 'fda', component: FatorAlcanceComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
