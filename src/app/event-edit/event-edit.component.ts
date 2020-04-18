import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EventModel} from '../model/EventModel';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  public newEventFormController:FormGroup;
  eventModel = new EventModel();

  constructor(
    private dialogRef: MatDialogRef<EventEditComponent>,
    private dataFromComponentHandlerService: DataFromComponentHandlerService,
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.eventModel = data.eventModel;

    this.newEventFormController = new FormGroup({
      eventId :new FormControl( this.eventModel.eventId),
      eventName:new FormControl( this.eventModel.eventName),
      eventDescription:new FormControl(this.eventModel.eventDescription),
      eventDate:new FormControl(this.eventModel.eventDate),
      eventStartTime:new FormControl(this.eventModel.eventStartTime),
      eventEndTime:new FormControl(this.eventModel.eventEndTime),
      eventStatus:new FormControl(this.eventModel.eventCompleted)
    });

  }

  ngOnInit(): void {
  }

  saveEditedEvent() {

    // let eventModel = new EventModel();
    //
    // eventModel.eventId = this.newEventFormController.controls["eventId"].value;
    // eventModel.eventName = this.newEventFormController.controls["eventName"].value;
    // eventModel.eventDescription = this.newEventFormController.controls["eventDescription"].value;
    // eventModel.eventDate = this.newEventFormController.controls["eventDate"].value;
    // eventModel.eventStartTime = this.newEventFormController.controls["eventStartTime"].value;
    // eventModel.eventEndTime = this.newEventFormController.controls["eventEndTime"].value;
    // eventModel.eventCompleted = 'Not Completed';
    //
    // this.dataFromComponentHandlerService.addNewEvent(eventModel);

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
