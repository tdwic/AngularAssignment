import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  public newEventFormController:FormGroup;


  constructor() { }

  ngOnInit(): void {
  }

  saveEditedEvent() {

  }

  closeDialog() {

  }
}
