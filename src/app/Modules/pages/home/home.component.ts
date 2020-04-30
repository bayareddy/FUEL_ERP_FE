import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) {
    
   }
   names;class;bunk;nav;

   lists=[{name:'Angular'},{name:'Vue'}]

   hidden;

ngOnInit(){

}
  logout(){
    this.router.navigate[('')]
  }



}
