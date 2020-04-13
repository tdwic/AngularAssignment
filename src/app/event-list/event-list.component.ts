import { Component, OnInit } from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  message: string;
  lists:Array<any>;
  user ={
    name:'',
    age:0
  };

  constructor(private dataFromComponentHandlerService: DataFromComponentHandlerService) {
  }

  ngOnInit(): void {

    this.dataFromComponentHandlerService.dateSubject.subscribe(
      data=> this.changeValue(data)
    );

  }

  changeValue(data){
    console.log("data" + data.value);
    this.user = data;

    console.log(this.user);
    this.lists.push(data);

  }

}
