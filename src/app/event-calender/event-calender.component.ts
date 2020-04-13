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
user=
  {name:'lal',
  age:12,
  date:Date};
  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {
  }

  dateChangeHandler(event) {
    this.user.date = event;
    this.dataFromComponentHandlerService.dateUpdate(this.user);
  }

}
