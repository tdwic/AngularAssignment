import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';
import {faPencilAlt,faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {EventListByDayComponent} from '../event-list-by-day/event-list-by-day.component';
import {EventAddNewComponent} from '../event-add-new/event-add-new.component';
import {DateFormat} from '../GlobleMethod/dateFormat';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  dateFormatService = new DateFormat();
  idNumber:number=0;
  EventListMemory: Array<EventModel> = [];
  EventList: Array<EventModel> = [];
  tempArray: Array<EventModel> = [];

  selectedDate: any;
  faPencilAlt: any;
  faTrashAlt: any;

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


  constructor(
    public matDialog: MatDialog,
    private dataFromComponentHandlerService: DataFromComponentHandlerService) {
    this.faPencilAlt=faPencilAlt;
    this.faTrashAlt = faTrashAlt;
  }
  time = new Date();

  ngOnInit() {
    this.clockMethod();

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
      let date = this.dateFormatService.formatDateInput(event.eventDate);
      if (date == this.selectedDate){
        this.tempArray.push(event);
      }
    });

    this.dataFromComponentHandlerService.filterEventsByDate(this.tempArray);

  }

  changeValueNewEvent(data){
    let eventModel: EventModel;
    eventModel = data;
    eventModel.eventId = this.idNumber++;
    this.EventListMemory.push(eventModel);
    this.EventList.push(eventModel);
  }

  editEvent(event) {
    // let eventModel: EventModel;
    // eventModel = event;
    // this.matDialog.open(EventAddNewComponent,{width:"70%",eventModel:{
    //
    //   }});
  }

  removeEvent(eventId: number) {
    let indexInMemory;
    let indexInView;
    indexInMemory = (this.EventListMemory.findIndex(x=>x.eventId == eventId));
    indexInView = (this.EventListMemory.findIndex(x=>x.eventId == eventId));

    this.EventListMemory.splice(indexInMemory,1);
    this.EventList.splice(indexInView,1);

    if (this.EventListMemory.length == 0 || this.EventList.length == 0){
      this.idNumber = 0;
    }

  }

  clockMethod(){
    setInterval(() => {
      this.time = new Date();
      console.log(this.time.getHours()+":"+this.time.getMinutes());
    }, 1000);
  }


}
