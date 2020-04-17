import {Component, Inject, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-event-list-by-day',
  templateUrl: './event-list-by-day.component.html',
  styleUrls: ['./event-list-by-day.component.css']
})
export class EventListByDayComponent implements OnInit {

  EventList: Array<EventModel> = [];
  constructor(
    private dialogRef: MatDialogRef<EventListByDayComponent>,
    private dataFromComponentHandlerService: DataFromComponentHandlerService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.EventList = data;
  }

  ngOnInit(): void {  }


  closeDialog() {
    this.dialogRef.close();
  }
}
