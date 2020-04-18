import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EventModel} from '../model/EventModel';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  public newEventFormController:FormGroup;
  eventModel = new EventModel();

  constructor(
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

  }

  closeDialog() {

  }
}
