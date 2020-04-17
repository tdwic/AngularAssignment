import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  idNumber:number=0;
  EventListMemory: Array<EventModel> = [];
  EventList: Array<EventModel> = [];
  tempArray: Array<EventModel> = [];

  userEntity = {
    eventMainDate:'',
    eventList:[
      {
        eventId:'',
        eventName:'',
        eventStartTime:'',
        eventDate:'',
        eventEndTime:'',
        eventCompleted:'',
        eventDescription:''
      }
    ]
  };
  selectedDate: any;

  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) { }

  ngOnInit(): void {

    this.dataFromComponentHandlerService.selectedDate.subscribe(
      data => this.changeValue(data)
    );

    this.dataFromComponentHandlerService.newEvent.subscribe(
      data => this.changeValueNewEvent(data)
    );

  }



  changeValue(data) {

    this.tempArray = [];

    this.selectedDate =data;

    this.EventListMemory.forEach((event)=>{
      if (event.eventDate == this.selectedDate){
        this.tempArray.push(event);
      }
    });

    this.EventList =[];

    this.tempArray.forEach((event)=>{
      console.log(event);
      this.EventList.push(event);
    });

    this.dataFromComponentHandlerService.filterEventsByDate(this.EventList);

  }

  changeValueNewEvent(data){
    let eventModel: EventModel;
    eventModel = data;
    eventModel.eventId = this.idNumber++;
    this.EventListMemory.push(eventModel);
    this.EventList.push(eventModel);
  }

}
