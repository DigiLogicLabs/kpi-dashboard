import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpiRoutingModule } from './kpi-routing.module';
import { KpiComponent } from './kpi.component';
import { BarChartComponent } from 'src/app/d3/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/d3/pie-chart/pie-chart.component';
import { DonutChartComponent } from 'src/app/d3/donut-chart/donut-chart.component';


@NgModule({
  declarations: [
    KpiComponent,
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent,
  ],
  imports: [
    CommonModule,
    KpiRoutingModule
  ]
})
export class KpiModule { }
