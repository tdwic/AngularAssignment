import { Component, OnInit } from '@angular/core';
import {DataServiceService} from '../data-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  message: string;

  constructor(private data: DataServiceService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message );
  }

}
