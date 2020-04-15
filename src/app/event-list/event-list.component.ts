import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  EventListMemory: Array<EventModel> = [];
  EventList: Array<EventModel> = [];

  EventListNew: Array<any> = [];

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
    this.selectedDate =data;
    this.EventListMemory.forEach((event)=>{
        if (event.eventDate == this.selectedDate){
          this.EventList.push();
        }
    });


    // this.EventList.forEach((obj)=>{
    //     if(obj.eventDate == "14/4/2020"){
    //       obj.eventCompleted = 'Completed';
    //       this.dataFromComponentHandlerService.updateNextEvent(obj);
    //     }
    //   }
    // );

  }

  changeValueNewEvent(data){
    let eventModel = new EventModel();
    eventModel = data;
    this.EventListMemory.push(eventModel);
    this.EventList.push(eventModel);
  }

}
