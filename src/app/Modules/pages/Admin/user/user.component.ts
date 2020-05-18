import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  table_data = [
    { name: 'Raj', role: 'Admin', address: 'Bangalore-516023' },
    { name: 'Rak', role: 'Manager', address: 'Bangalore-516023' },
    { name: 'Ram', role: 'User', address: 'Bangalore-516023' },
    { name: 'Rat', role: 'User', address: 'Bangalore-516023' },
  ];
  table_head_list = ['#', 'Name', 'Role', 'Address', 'Action']

  constructor() { }

  ngOnInit(): void {
  }

}
