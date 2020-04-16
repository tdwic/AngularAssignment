import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {DateFormat} from '../GlobleMethod/dateFormat';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventAddNewComponent} from '../event-add-new/event-add-new.component';
import {EventListByDayComponent} from '../event-list-by-day/event-list-by-day.component';

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
    public matDialog: MatDialog,
    private dataFromComponentHandlerService: DataFromComponentHandlerService
  ) {
  }

  ngOnInit(): void {
  }

  dateChangeHandler(event) {
    this.dataFromComponentHandlerService.dateUpdate(this.formatDateInput(event));
    this.matDialog.open(EventListByDayComponent,{width:"50%"});
  }

  public formatDateInput(date: Date): string {
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return day + '/' + month + '/' + year;
  }

}
