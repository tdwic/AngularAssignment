import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  selectedDate: Date;
  sd: Date;

  EventList: Array<EventModel> = [];

  userEntity = {
    eventId: 0,
    eventCaption: "23",
    eventDate: "23",
    eventTime: "23"
  };


  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {

    this.dataFromComponentHandlerService.selectedDate.subscribe(
      data => this.changeValue(data)
    );

  }

  changeValue(data) {
    this.selectedDate = data;
    let eventObject = new EventModel();

    eventObject.eventId = Date.now();
    eventObject.eventCaption="test";
    eventObject.eventDate=data;
    eventObject.eventTime=data;

    this.EventList.push(eventObject);

    this.EventList.forEach((obj)=>{
        if(obj.eventDate == "22/4/2020"){
          this.dataFromComponentHandlerService.updateNextEvent(obj);
        }
      }
    );

  }

}
