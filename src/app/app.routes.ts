import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RequestComponent } from './pages/request/request.component';
import { UsersComponent } from './pages/users/users.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'requests', component: RequestComponent },
  { path: 'users', component: UsersComponent },
  { path: 'warehouse', component: WarehouseComponent },
];
