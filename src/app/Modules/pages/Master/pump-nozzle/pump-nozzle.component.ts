import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pump-nozzles',
  templateUrl: './pump-nozzle.component.html',
  styleUrls: ['./pump-nozzle.component.scss']
})
export class PumpNozzleComponent implements OnInit {
  table_data = [
    { pump: 'Pump1', nozzles: ['N1', 'N2', 'N3'], products: ['Diesel','Petrol','Diesel'] },    
    { pump: 'Pumm2', nozzles: ['N1', 'N2', 'N3'], products: ['Diesel','Petrol','Diesel'] },    
    { pump: 'Pump3', nozzles: ['N1', 'N2', 'N3'], products: ['Diesel','Petrol','Diesel'] },    
    { pump: 'Pump4', nozzles: ['N1', 'N2', 'N3'], products: ['Diesel','Petrol','Diesel'] },    
    { pump: 'Pump5', nozzles: ['N1', 'N2', 'N3'], products: ['Diesel','Petrol','Diesel'] },    
  ];
  table_head_list = ['#', 'Pump', 'Nozzles', 'Products'];
  constructor() { }

  ngOnInit(): void {
  }

}
