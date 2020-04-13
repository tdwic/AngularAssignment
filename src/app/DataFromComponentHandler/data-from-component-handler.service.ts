import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFromComponentHandlerService {

  private messageSource = new BehaviorSubject<string>('dafault message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  changeMessage(message: string){
    this.messageSource.next(message);
  }
}
