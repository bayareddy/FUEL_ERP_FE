import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
show=true;

showAdd;
swipeAdded;

swipeForm=new FormGroup({
  mmid:new FormControl(1),
  payment:new FormControl('')
})

swipingArray=[
  {mmid:'MMID1',payment:1000},

]

checkArray=[
  {vendorName:'HP',checkNo:'1234',bankName:'HDFC',amount:7899},
  {vendorName:'HP',checkNo:'1234',bankName:'HDFC',amount:7899},

]

  constructor() { }

  ngOnInit(): void {
  }

  hideSwipe(){
this.showAdd=!this.showAdd;

  }


  swipeSubmit(){
this.swipingArray.push(this.swipeForm.value);
this.swipeAdded=true;
setTimeout(()=>{
  this.swipeAdded=false; 
  this.showAdd=!this.showAdd;
},2000)

  }


}
