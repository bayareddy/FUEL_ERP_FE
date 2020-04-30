import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-sale',
  templateUrl: './credit-sale.component.html',
  styleUrls: ['./credit-sale.component.scss']
})
export class CreditSaleComponent implements OnInit {

  cerditSaleTableData: Array<any> = [
    { sNo: '1', creditCustName: 'Ramana', products: 'Petrol', totalSales: '10,000', paidAmount: '9,000' },
    { sNo: '2', creditCustName: 'Raj', products: 'Petrol', totalSales: '11,000', paidAmount: '6,000' },
    { sNo: '3', creditCustName: 'Ram', products: 'Petrol', totalSales: '16,000', paidAmount: '3,000' },
    { sNo: '4', creditCustName: 'Ragav', products: 'Petrol', totalSales: '70,000', paidAmount: '19,000' },
    { sNo: '5', creditCustName: 'Ravi', products: 'Petrol', totalSales: '1,000', paidAmount: '90,000' },
  ];
  productTableData: Array<any> = [
    { sNo: '1', product: 'Petrol', qty: '10', ltrPrice: '70', gst: '18', vat: '5', totalAmount: '700' },
    { sNo: '2', product: 'Petrol', qty: '10', ltrPrice: '70', gst: '18', vat: '5', totalAmount: '700' },
    { sNo: '3', product: 'Petrol', qty: '10', ltrPrice: '70', gst: '18', vat: '5', totalAmount: '700' },
    { sNo: '4', product: 'Petrol', qty: '10', ltrPrice: '70', gst: '18', vat: '5', totalAmount: '700' },
    { sNo: '5', product: 'Petrol', qty: '10', ltrPrice: '70', gst: '18', vat: '5', totalAmount: '700' },
  ];
  customerNameList: Array<any> = [];


  constructor() { }

  ngOnInit(): void {
    this.cerditSaleTableData.forEach(d => {
      this.customerNameList.push(d['creditCustName']);
    })
  }

}
