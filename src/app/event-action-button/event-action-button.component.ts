import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddNewEventComponent} from '../add-new-event/add-new-event.component';

@Component({
  selector: 'app-event-action-button',
  templateUrl: './event-action-button.component.html',
  styleUrls: ['./event-action-button.component.css']
})
export class EventActionButtonComponent implements OnInit {

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  clickActionButton(event){
    console.log(event);
    this.matDialog.open(AddNewEventComponent);
  }

}
