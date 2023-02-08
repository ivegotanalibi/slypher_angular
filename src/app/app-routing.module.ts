import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//    {
//     path: '', component: AppComponent,
//     children: [
//         { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule),data: { preload: true } },

//     ]
//    } 

// ];


@NgModule({
  imports: [RouterModule.forRoot([
    {
        path: 'app',
                component: AppComponent,
                // canActivate: [AppRouteGuard],
                // canActivateChild: [AppRouteGuard],
                children: [
                    {
                        path: '',
                        children: [
                          
                            // { path: 'notifications', component: NotificationsComponent },
                            // { path: '', redirectTo: '/app/main/dashboard', pathMatch: 'full' }
                        ]
                    },
                   
                    {
                        path: 'main',
                        loadChildren: () => import('./main/main.module').then(m => m.MainModule), //Lazy load main module
                        data: { preload: true }
                    },
                ]
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
