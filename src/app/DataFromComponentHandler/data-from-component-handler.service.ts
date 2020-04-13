import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFromComponentHandlerService {

public dateSubject = new Subject();

  constructor() { }

  dateUpdate(data){
    this.dateSubject.next(data);
  }

}
