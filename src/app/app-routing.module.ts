import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KpiComponent } from './modules/kpi/kpi.component';

const routes: Routes = [
  
  {
    path: 'kpi',
    component: KpiComponent,
    loadChildren: () => import('./modules/kpi/kpi.module').then(m => m.KpiModule)
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
