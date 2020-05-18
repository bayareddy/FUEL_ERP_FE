import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {
  table_data = [
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },
    { supplierName: 'HPCL', contactpersonName: 'Raj', mobileNo: '9876543210', emailId: 'raj@gmail.com', taleFax: '12345', address: 'Bangalore-516023' },

  ];
  table_head_list = ['#', 'Supplier Name', 'Contact Person Name', 'Mobile No', 'Email ID', 'Tale Fax', 'Address', 'Action']

  constructor() { }

  ngOnInit(): void {
  }

}
