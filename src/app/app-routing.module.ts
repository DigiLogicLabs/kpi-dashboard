import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiComponent } from './modules/kpi/kpi.component';
import { OverviewComponent } from './modules/overview/overview.component';
import { TeamComponent } from './modules/team/team.component';

const routes: Routes = [
  
  {
    path: 'kpi',
    component: KpiComponent,
    loadChildren: () => import('./modules/kpi/kpi.module').then(m => m.KpiModule)
  },
  {
    path: 'team',
    component: TeamComponent,
    loadChildren: () => import('./modules/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'overview',
    component: OverviewComponent,
    loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule)
  },
  {
    path: '**', 
    redirectTo: 'kpi'
  },
  {
    path: '',
    redirectTo: 'kpi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
