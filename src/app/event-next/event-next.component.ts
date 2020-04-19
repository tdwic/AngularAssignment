import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';

@Component({
  selector: 'app-next-event',
  templateUrl: './event-next.component.html',
  styleUrls: ['./event-next.component.css']
})
export class EventNextComponent implements OnInit {

  EventList: Array<EventModel> = [];

eventModel= {
  eventDescription:'',
  eventId: '',
  eventName: '',
  eventStartTime: '',
  eventDate: '',
  eventEndTime:'',
  eventCompleted:''
};
  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {
    this.dataFromComponentHandlerService.nextEvent.subscribe(
      data => this.changeValue(data)
    );

    this.dataFromComponentHandlerService.eventIdToRemove.subscribe(
      data => this.removeEvent(data)
    );
  }

  changeValue(data){
    let eventModel: EventModel;
    eventModel = data;
    this.EventList =[];
    this.EventList.push(eventModel);
  }

  removeEvent(data){
    this.EventList.splice(0,1);
  }

}
