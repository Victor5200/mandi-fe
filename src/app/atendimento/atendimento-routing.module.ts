import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AcompanharAtividadeComponent} from "./acompanhar-atividade/acompanhar-atividade.component";

const routes: Routes = [
  { path: '', component: AcompanharAtividadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
