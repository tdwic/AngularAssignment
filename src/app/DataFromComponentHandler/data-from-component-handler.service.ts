import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {EventModel} from '../model/EventModel';

@Injectable({
  providedIn: 'root'
})
export class DataFromComponentHandlerService {

  public selectedDate = new Subject();
  public nextEvent = new Subject();
  public newEvent = new Subject();

  constructor() {
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

}
