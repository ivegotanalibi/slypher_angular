import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TodoComponent } from './todo/todo.component';

// const routes: Routes = [
//   { path: 'table', component: TableComponent },
// ];



@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
                children: [
                    // { path: 'dashboard', component: DashboardComponent, data: { permission: 'Pages.Tenant.Dashboard' } },

                    { path: 'table', component: TableComponent },
                    { path: 'todo', component: TodoComponent },

                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: '**', redirectTo: 'dashboard' }

                ]
    }
  ])],
  exports: [RouterModule]
})
export class MainRoutingModule { }
