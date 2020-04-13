import {Component, OnInit} from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent implements OnInit {
  selectedDate: Date;
  userSelectedDate: Date;

  message: string;

  constructor(private data: DataServiceService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message );
  }

  dateChangeHandler(event) {
    this.userSelectedDate = event;
    this.data.changeMessage('hii');
  }

}
