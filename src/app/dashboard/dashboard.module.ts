import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClienteDashboardComponent } from './cliente-dashboard/cliente-dashboard.component';
import { AtividadeDashboardComponent } from './atividade-dashboard/atividade-dashboard.component';


@NgModule({
  declarations: [
    ClienteDashboardComponent,
    AtividadeDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
