import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreditSaleComponent } from './credit-sale/credit-sale.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/LoginComponent', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: NavbarComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path:'creditSale',component:CreditSaleComponent}
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
