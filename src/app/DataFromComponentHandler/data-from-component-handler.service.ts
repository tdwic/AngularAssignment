import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFromComponentHandlerService {

public selectedDate = new Subject();

  constructor() { }

  dateUpdate(data){
    this.selectedDate.next(data);
  }

}
