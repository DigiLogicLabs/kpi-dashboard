import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from '../team/team.component';
import { KpiComponent } from './kpi.component';

const routes: Routes = [
  {
    path: '',
    component: KpiComponent
  },
  // {
  //   path: '/analysis',
  //   component: kpiComponent
  // },
  // test note function 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KpiRoutingModule { }
