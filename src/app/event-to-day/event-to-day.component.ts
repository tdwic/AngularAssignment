import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-to-day',
  templateUrl: './event-to-day.component.html',
  styleUrls: ['./event-to-day.component.css']
})
export class EventToDayComponent implements OnInit {

  constructor() { }

  time = new Date();

  ngOnInit() {

    console.log(this.time);

    setInterval(() => {
      this.time = new Date;
      // let x = this.time.getTimezoneOffset();
      // let y = this.time.toDateString() + x;
      // //console.log(this.time.getHours()+10+":"+this.time.getMinutes());
      // console.log(y);
    }, 1000);
  }



}
