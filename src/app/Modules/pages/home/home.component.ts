import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  getWeekDaysList(){
    let DateList = [];
    for (let i = 0; i < 7; i++) {
      var today = new Date();
      let x = today.getDay();
      today.setDate(today.getDate() + ((x + i) + (7 - today.getDay())) % 7);
      let day = String(today);
      DateList.push((day.substring(0, 3)) + ' ' + (day.substring(8, 10)) + ' ' + (day.substring(4, 7)))
    }
    console.log(DateList);
  }

}
