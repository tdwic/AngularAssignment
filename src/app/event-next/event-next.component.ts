import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';

@Component({
  selector: 'app-next-event',
  templateUrl: './event-next.component.html',
  styleUrls: ['./event-next.component.css']
})
export class EventNextComponent implements OnInit {

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
  }

  changeValue(data){

    this.eventModel = data;

    console.log("In Next Event Component " + this.eventModel.eventName);

  }

}
