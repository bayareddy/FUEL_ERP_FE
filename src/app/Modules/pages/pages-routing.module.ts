import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/LoginComponent',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'success',
    component: NavbarComponent,
    children: [
      {path:'', component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'sales', component:SalesComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
