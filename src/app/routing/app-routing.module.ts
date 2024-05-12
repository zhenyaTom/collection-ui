import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './routes';
import { MainPageComponent } from '../components/main-page/main-page.component';
import { AdmintoolComponent } from '../components/admintool/admintool.component';
import { MasterGuard } from './master.guard';

const routes: Routes = [
  {
    path: AppRoutes.MAIN_PAGE,
    component: MainPageComponent,
    canActivate: [MasterGuard],
  },
  {
    path: AppRoutes.ADMINTOOL,
    component: AdmintoolComponent,
    canActivate: [MasterGuard],
  },
  {
    path: `**`,
    redirectTo: AppRoutes.MAIN_PAGE,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
