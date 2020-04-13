import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent implements OnInit {
  selectedDate: Date;
  userSelectedDate: Date;

  message: string;

  constructor(private data: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message );
  }

  dateChangeHandler(event) {
    this.userSelectedDate = event;
    this.data.changeMessage('hii');
  }

}
