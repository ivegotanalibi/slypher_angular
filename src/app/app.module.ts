import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './dummyservice';
import  {ProgressBarModule}  from 'primeng/progressbar';
import  {TableModule}  from 'primeng/table';
import { compileNgModule } from "@angular/compiler";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    TableModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 