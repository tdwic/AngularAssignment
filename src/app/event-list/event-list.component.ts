import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  message: string;

  constructor(private data: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message = message );
  }

}
