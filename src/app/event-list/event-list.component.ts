import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  selectedDate:Date;
  sd:Date;

  EventList=[
    {
      eventId:1,
      eventCaption:'First Event',
      eventTime:'03.30-PM',
      eventDate:'2020-02-10'
    },
    {
      eventId:2,
      eventCaption:'Second Event',
      eventTime:'03.30-PM',
      eventDate:'2020-02-15'
    },
    {
      eventId:3,
      eventCaption:'Third Event',
      eventTime:'03.30-PM',
      eventDate:'2020-02-22'
    }
  ];


  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {

    this.dataFromComponentHandlerService.selectedDate.subscribe(
      data=> this.changeValue(data)
    );

  }

  changeValue(data){
    this.selectedDate = data;
  }

}
