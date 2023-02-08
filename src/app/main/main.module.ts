import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { TodoComponent } from './todo/todo.component';
import { CreatetodoComponent } from './todo/createtodo/createtodo.component';
import { EdittodoComponent } from './todo/edittodo/edittodo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TableComponent,
    TodoComponent,
    CreatetodoComponent,
    EdittodoComponent,  
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    TableModule,
    HttpClientModule
  ]
})
export class MainModule { }
