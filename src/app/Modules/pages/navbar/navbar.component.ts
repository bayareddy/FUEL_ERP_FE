import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  openSideNav:boolean = false;
  MenuList:any = [{name:'Home', href:'/main/home', iconText:'fas fa-home'},
  {name:'Sales', href:'/main/sales', iconText:'fas fa-gas-pump'},
  {name:'Credit Sale', href:'/main/creditSale', iconText:'fas fa-credit-card'},
  {name:'Accounts', href:'/main/accounts', iconText:'fas fa-file-contract'},
  {name:'Shifts', href:'/main/shifts', iconText:'fas fa-tachometer-alt'},
  {name:'Dashboard', href:'/main/dashboards', iconText:'fas fa-th'},
  {name:'Users Management', href:'/main/userManagement', iconText:'fas fa-users'},
];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }  

  closeNav() {
    this.openSideNav = false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
