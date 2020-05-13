import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material-module';
import { SalesComponent } from './sales/sales.component';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { UserComponent } from './Admin/user/user.component';
import { ProductComponent } from './Admin/product/product.component';
import { RoleComponent } from './Admin/role/role.component';
import { SupplierComponent } from './Admin/supplier/supplier.component';
import { CreditCustomerComponent } from './Admin/credit-customer/credit-customer.component';

import { TankComponent } from './Master/tank/tank.component';
import { PumpNozzleComponent } from './Master/pump-nozzle/pump-nozzle.component';


@NgModule({
  declarations: [LoginComponent, 
    SignupComponent, HomeComponent,
     NavbarComponent, SalesComponent,
      UserComponent, ProductComponent,
       RoleComponent, SupplierComponent, 
       CreditCustomerComponent, TankComponent, PumpNozzleComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers:[ApiService,CommonService]
})
export class PagesModule { }
