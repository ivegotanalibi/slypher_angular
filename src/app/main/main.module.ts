import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TableModule,
  ]
})
export class MainModule { }
