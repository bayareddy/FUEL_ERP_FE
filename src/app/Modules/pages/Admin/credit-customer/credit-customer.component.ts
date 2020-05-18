import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-customer',
  templateUrl: './credit-customer.component.html',
  styleUrls: ['./credit-customer.component.scss']
})
export class CreditCustomerComponent implements OnInit {

  table_data = [
    { name: 'raju', creditAmount: 500, outStandingBalancy: 500 },
    { name: 'raju', creditAmount: 500, outStandingBalancy: 500 },
    { name: 'raju', creditAmount: 500, outStandingBalancy: 500 },
    { name: 'raju', creditAmount: 500, outStandingBalancy: 500 },
    { name: 'raju', creditAmount: 500, outStandingBalancy: 500 },
  ];
  table_head_list = ['#', 'Name', 'Credit Amount', 'Out Standing Amount', 'Action']

  constructor() { }

  ngOnInit(): void {    
  }

}
