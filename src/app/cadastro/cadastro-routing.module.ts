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
<<<<<<< Updated upstream
import {ProjetosComponent} from "./projetos/projetos.component";
import {PautaComponent} from "./pauta/pauta.component";
=======
import {PilarComponent} from "./pilar/pilar.component";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  { path: 'projetos', component: ProjetosComponent},
  { path: 'pauta', component: PautaComponent}
=======
  { path: 'pilar', component: PilarComponent}
>>>>>>> Stashed changes
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
