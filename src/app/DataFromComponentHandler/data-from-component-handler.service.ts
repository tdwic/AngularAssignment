import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EventModel} from '../model/EventModel';
import {MatDialog} from '@angular/material/dialog';
import {EventListByDayComponent} from '../event-list-by-day/event-list-by-day.component';

@Injectable({
  providedIn: 'root'
})
export class DataFromComponentHandlerService {

  public selectedDate = new Subject();
  public nextEvent = new Subject();
  public newEvent = new Subject();
  public feilteredEventsByDate = new Subject();

  constructor(public matDialog: MatDialog) {

  }

  dateUpdate(data) {
    this.selectedDate.next(data);
  }

  updateNextEvent(data){
    this.nextEvent.next(data);
  }

  addNewEvent(data){
    this.newEvent.next(data);
  }

  filterEventsByDate(data){
    this.feilteredEventsByDate.next(data);
    console.log("Just Paased" + data);
    this.matDialog.open(EventListByDayComponent,{width:"70%",data});

  }


}
