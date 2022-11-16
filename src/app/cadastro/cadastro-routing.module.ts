import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioComponent} from "./usuario/usuario.component";
import {ProatividadeComponent} from "./proatividade/proatividade.component";
import {SentimentoComponent} from "./sentimento/sentimento.component";
import {ExposicaoComponent} from "./exposicao/exposicao.component";
import {ClienteComponent} from "./cliente/cliente.component";

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent},
  { path: 'proatividade', component: ProatividadeComponent},
  { path: 'sentimento', component: SentimentoComponent},
  { path: 'exposicao', component: ExposicaoComponent},
  { path: 'cliente', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
