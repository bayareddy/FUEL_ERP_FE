import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  table_data = [
    { productName: 'GAS', minQty: 0, productType:'gas',  description: 'NA' },
    { productName: 'OIL', minQty: 0, productType:'oil',  description: 'oil' },
    { productName: 'OIL', minQty: 3, productType:'oil',  description: 'NA' },
    { productName: 'PETROL', minQty: 0, productType:'oil',  description: 'petrol' },
    { productName: 'PETROL', minQty: 5, productType:'oil',  description: 'NA' },
  ];
  table_head_list = ['#', 'Product Name', 'Min Qty', 'Product Type', 'Description', 'Action']
  constructor() { }

  ngOnInit(): void {
  }

}
