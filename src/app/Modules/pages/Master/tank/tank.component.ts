import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  table_data = [
    { name:'MMID1', product:'1000', dipReading:'90' },    
    { name:'MMI2', product:'2000', dipReading:'80' },    
    { name:'MMID3', product:'3000', dipReading:'70' },    
    { name:'MMID4', product:'4000', dipReading:'60' },    
  ];
  table_head_list = ['#', 'Name','Products', 'Dip Reading'];

  constructor() { }

  ngOnInit(): void {
  }

}
