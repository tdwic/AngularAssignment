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
    setInterval(() => {
      this.time = new Date();
      console.log(this.time.getHours()+":"+this.time.getMinutes());
    }, 1000);
  }

}
