import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css'],
})
export class KpiComponent implements OnInit {
  // data: Observable<Data>;
  data: any[] = [
    { name: 'abc-1', value: '200', color: '#9954E6' },
    { name: 'abc-2', value: '100', color: '#63adfeb3' },
    { name: 'abc-3', value: '500', color: '#533a84' },
    { name: 'abc-4', value: '300', color: '#dd8050c4' },
    { name: 'abc-5', value: '50', color: '#BF60C4' },
  ];
  pieData: any[] = [
    {
      name: 'text1',
      value: '95',
    },
    {
      name: 'text1',
      value: '4',
    },
    {
      name: 'text3',
      value: '1',
    },
  ];
  constructor(private http: HttpClient) {
    //this.data = this.http.get<Data>('../../../assets/data/data.json');
  }

  ngOnInit(): void {}
}
