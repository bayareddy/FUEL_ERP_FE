import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  table_data = [
    { roleName: 'Sr Manager', description: 'Seniour Manager' },
    { roleName: 'Sales Manager',  description: 'Sales Manager' },
    { roleName: 'Manager', description: 'Manager' },
    { roleName: 'Sr Manager', description: 'Seniour Manager' },
    { roleName: 'Admin', description: 'admin' },    
  ];
  table_head_list = ['#', 'Role Name', 'Description', 'Action']

  constructor() { }

  ngOnInit(): void {
  }

}
