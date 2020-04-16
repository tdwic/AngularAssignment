import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';

@Component({
  selector: 'app-event-list-by-day',
  templateUrl: './event-list-by-day.component.html',
  styleUrls: ['./event-list-by-day.component.css']
})
export class EventListByDayComponent implements OnInit {

  EventList: Array<EventModel> = [];

  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) { }

  ngOnInit(): void {

    this.dataFromComponentHandlerService.feilteredEventsByDate.subscribe(
      data => this.changeValue(data)
    );

    this.EventList.forEach((event)=>{
      console.log(event);
    });

  }

  changeValue(data){
    this.EventList = data;
  }


}
