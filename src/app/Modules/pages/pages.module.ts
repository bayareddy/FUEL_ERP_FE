import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from 'src/app/material-module';
import { SalesComponent } from './sales/sales.component';
import { ApiService } from 'src/app/Services/ApiService/api.service';
import { CommonService } from 'src/app/Services/CommonService/common.service';


@NgModule({
  declarations: [LoginComponent, SignupComponent, HomeComponent, NavbarComponent, SalesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers:[ApiService,CommonService]
})
export class PagesModule { }
