import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
  show = true;

  showAdd;
  swipeAdded;

  // swipeForm = new FormGroup({
  //   mmid: new FormControl(1),
  //   payment: new FormControl('')
  // })

  swipingArray = [
    { mmid: 'MMID1', payment: 1000 },

  ]

  checkArray = [
    { vendorName: 'HP', checkNo: '1234', bankName: 'HDFC', amount: 7899 },
    { vendorName: 'HP', checkNo: '1234', bankName: 'HDFC', amount: 7899 },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  hideSwipe() {
    this.showAdd = !this.showAdd;

  }


  // swipeSubmit() {
  //   this.swipingArray.push(this.swipeForm.value);
  //   this.swipeAdded = true;
  //   setTimeout(() => {
  //     this.swipeAdded = false;
  //     this.showAdd = !this.showAdd;
  //   }, 2000)

  // }

  table_data_Sales = [
    {name:'Ram', shift:['Shift-1'],pump:['pump-1','Pump-3'],nozzle:['Nozzle-1'],totalSales:'100000'},
    {name:'Ram', shift:['Shift-1','shift-2'],pump:['pump-1'],nozzle:['Nozzle-1'],totalSales:'100000'},
    {name:'Ram', shift:['Shift-1'],pump:['pump-1'],nozzle:['Nozzle-1','Nozzle-2'],totalSales:'100000'},
    {name:'Ram', shift:['Shift-1'],pump:['pump-1','Pump-2'],nozzle:['Nozzle-1','Nozzle-3'],totalSales:'100000'},
    {name:'Ram', shift:['Shift-1'],pump:['pump-1'],nozzle:['Nozzle-1'],totalSales:'100000'},
  ];
  sales_table_head_list = ['#', 'Name', 'Shift', 'Pump', 'Nozzle','Total Sales','Action'];

  table_data_Fuel = [
    {pump:'Pump-1',nozzle:'Nozzle-1', product:'Petrol', openingBalace:'10000', closingBalance:'20000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'700'},
    {pump:'Pump-2',nozzle:'Nozzle-2', product:'Diesel', openingBalace:'30000', closingBalance:'20000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'700'},
    {pump:'Pump-3',nozzle:'Nozzle-3', product:'Diesel', openingBalace:'10000', closingBalance:'60000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'760'},
    {pump:'Pump-4',nozzle:'Nozzle-4', product:'Petrol', openingBalace:'50000', closingBalance:'20000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'702'},
    {pump:'Pump-5',nozzle:'Nozzle-5', product:'Diesel', openingBalace:'10000', closingBalance:'30000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'740'},
    {pump:'Pump-6',nozzle:'Nozzle-6', product:'Petrol', openingBalace:'70000', closingBalance:'20000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'730'},
    {pump:'Pump-7',nozzle:'Nozzle-7', product:'Petrol', openingBalace:'10000', closingBalance:'70000',testing:'5',saleFuelQty:'1000',ltrPrice:'70',sales:'770'},
  ];
  fuel_table_head_list = ['#', 'Pump', 'Nozzle', 'Product', 'Opening Balance','Closing Balance','Testing','Sale Fuel Qty','Ltr Price','Sales','Action'];


}
