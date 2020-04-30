import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  zoom ;
  down ;
  sale ;
  imgPath='https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg';
  openSideNav:boolean = false;
<<<<<<< HEAD
  MenuList:any = [{name:'Home', href:'home', iconText:'fas fa-home'},
  {name:'Sales', href:'sales', iconText:'fas fa-gas-pump'},
  {name:'Accounts', href:'/accounts', iconText:'fas fa-file-contract'},
  {name:'Shifts', href:'/shifts', iconText:'fas fa-tachometer-alt'},
  {name:'Dashboard', href:'/dashboard', iconText:'fas fa-th'},
  {name:'Users Management', href:'/userManagement', iconText:'fas fa-users'}];
=======
  MenuList:any = [{name:'Home', href:'/main/home', iconText:'fas fa-home'},
  {name:'Sales', href:'/main/sales', iconText:'fas fa-gas-pump'},
  {name:'Credit Sale', href:'/main/creditSale', iconText:'fas fa-credit-card'},
  {name:'Accounts', href:'/main/accounts', iconText:'fas fa-file-contract'},
  {name:'Shifts', href:'/main/shifts', iconText:'fas fa-tachometer-alt'},
  {name:'Dashboard', href:'/main/dashboards', iconText:'fas fa-th'},
  {name:'Users Management', href:'/main/userManagement', iconText:'fas fa-users'},
];
>>>>>>> 0ef4afd140262038c8aefd44aeafc022c35e2ee7

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
