import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {DateFormat} from '../GlobleMethod/dateFormat';

@Component({
  selector: 'app-event-calender',
  templateUrl: './event-calender.component.html',
  styleUrls: ['./event-calender.component.css']
})
export class EventCalenderComponent implements OnInit {

  dateFormat: DateFormat;

  selectedDate: Date;
  userSelectedDate: Date;

  constructor(
    private dataFromComponentHandlerService: DataFromComponentHandlerService
  ) {
  }

  ngOnInit(): void {
  }

  dateChangeHandler(event) {
    this.dataFromComponentHandlerService.dateUpdate(this.formatDateInput(event));
  }

  public formatDateInput(date: Date): string {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return day + '/' + month + '/' + year;
  }

}
