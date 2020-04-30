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
  MenuList:any = [{name:'Home', href:'home', iconText:'fas fa-home'},
  {name:'Sales', href:'sales', iconText:'fas fa-gas-pump'},
  {name:'Accounts', href:'/accounts', iconText:'fas fa-file-contract'},
  {name:'Shifts', href:'/shifts', iconText:'fas fa-tachometer-alt'},
  {name:'Dashboard', href:'/dashboard', iconText:'fas fa-th'},
  {name:'Users Management', href:'/userManagement', iconText:'fas fa-users'}];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }  

  closeNav() {
    this.openSideNav = false;
  }

  logout(){
    this.router.navigate[('')]
  }

}
