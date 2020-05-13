import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { ProductComponent } from './Admin/product/product.component';
import { RoleComponent } from './Admin/role/role.component';
import { SupplierComponent } from './Admin/supplier/supplier.component';
import { UserComponent } from './Admin/user/user.component';
import { CreditCustomerComponent } from './Admin/credit-customer/credit-customer.component';
import { TankComponent } from './Master/tank/tank.component';
import { PumpNozzleComponent } from './Master/pump-nozzle/pump-nozzle.component';

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
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'credit-customer', component: CreditCustomerComponent },
      { path: 'product', component: ProductComponent },
      { path: 'role', component: RoleComponent },
      { path: 'supplier', component: SupplierComponent },
      { path: 'user', component: UserComponent },
      { path: 'tank', component: TankComponent },
      { path: 'pumpnozzle', component: PumpNozzleComponent },
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
