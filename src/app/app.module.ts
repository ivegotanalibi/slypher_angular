import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './dummyservice';
import  {ProgressBarModule}  from 'primeng/progressbar';
import  {TableModule}  from 'primeng/table';
import { compileNgModule } from "@angular/compiler";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TableModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
