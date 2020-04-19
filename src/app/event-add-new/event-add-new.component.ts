import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator} from '@angular/forms';
import {Timestamp} from 'rxjs/internal-compatibility';
import {EventModel} from '../model/EventModel';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {DateFormat} from '../GlobleMethod/dateFormat';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-event-add-new',
  templateUrl: './event-add-new.component.html',
  styleUrls: ['./event-add-new.component.css']
})
export class EventAddNewComponent implements OnInit {


  dateFormatService = new DateFormat();
  editableDialog:boolean=false;
  idNumber:number=0;
  public newEventFormController:FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EventAddNewComponent>,
    private dataFromComponentHandlerService: DataFromComponentHandlerService) {
    this.newEventFormController = new FormGroup({
      eventName:new FormControl(""),
      eventDescription:new FormControl(""),
      eventDate:new FormControl(new Date()),
      eventStartTime:new FormControl("10:00"),
      eventEndTime:new FormControl("10:00"),
      eventStatus:new FormControl("Not Completed")
    });
  }

  ngOnInit(): void {

  }

  addNewEvent(){
    let eventModel = new EventModel();

    eventModel.eventId = this.idNumber;
    eventModel.eventName = this.newEventFormController.controls["eventName"].value;
    eventModel.eventDescription = this.newEventFormController.controls["eventDescription"].value;
    eventModel.eventDate = this.newEventFormController.controls["eventDate"].value;
    eventModel.eventStartTime = this.newEventFormController.controls["eventStartTime"].value;
    eventModel.eventEndTime = this.newEventFormController.controls["eventEndTime"].value;
    eventModel.eventCompleted = 'Not Completed';

    this.dataFromComponentHandlerService.addNewEvent(eventModel);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
