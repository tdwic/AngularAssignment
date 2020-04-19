import {Component, OnInit} from '@angular/core';
import {DataFromComponentHandlerService} from '../DataFromComponentHandler/data-from-component-handler.service';
import {EventModel} from '../model/EventModel';
import {faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {DateFormat} from '../GlobleMethod/dateFormat';
import {EventEditComponent} from '../event-edit/event-edit.component';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  tempEventId:number;
  eventUpdated:boolean = false;

  dateFormatService = new DateFormat();
  idNumber:number=0;
  EventListMemory: Array<EventModel> = [];
  EventList: Array<EventModel> = [];
  ExpiredEventList: Array<EventModel> = [];
  tempArray: Array<EventModel> = [];

  selectedDate: any;
  faPencilAlt: any;
  faTrashAlt: any;



    eventList:
      {
        eventId:'-',
        eventName:'-',
        eventStartTime:'-',
        eventDate:'-',
        eventEndTime:'-',
        eventCompleted:'-',
        eventDescription:'-'
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
    this.itemPrinter();


    this.dataFromComponentHandlerService.saveUpdates.subscribe(
      data => this.saveEditChanges(data)
    );

    this.dataFromComponentHandlerService.selectedDate.subscribe(
      data => this.changeValue(data)
    );

    this.dataFromComponentHandlerService.newEvent.subscribe(
      data => this.changeValueNewEvent(data)
    );

  }

  saveEditChanges(data){
    this.eventUpdated = true;
    let eventModel: EventModel;
    eventModel = data;

    this.EventList.forEach((event)=>{
      if (event.eventId == eventModel.eventId){
        event.eventId = eventModel.eventId;
        event.eventName = eventModel.eventName;
        event.eventDescription = eventModel.eventDescription;
        event.eventStartTime = eventModel.eventStartTime;
        event.eventEndTime = eventModel.eventEndTime;
        event.eventDate = eventModel.eventDate;
        event.eventCompleted = eventModel.eventCompleted;
      }
    });

    this.EventListMemory.forEach((event)=>{
      if (event.eventId == eventModel.eventId){
        event.eventId = eventModel.eventId;
        event.eventName = eventModel.eventName;
        event.eventDescription = eventModel.eventDescription;
        event.eventStartTime = eventModel.eventStartTime;
        event.eventEndTime = eventModel.eventEndTime;
        event.eventDate = eventModel.eventDate;
        event.eventCompleted = eventModel.eventCompleted;
      }
    });
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
    let date = new Date().toDateString();
    let eventModel: EventModel;
    eventModel = data;
    eventModel.eventId = this.idNumber++;
    this.EventListMemory.push(eventModel);
    this.EventList.push(eventModel);
    //console.log(eventModel.eventDate.toDateString()+"=="+date);
    // if (eventModel.eventDate. == date || eventModel.eventDate.toDateString() > date){
    //   this.EventListMemory.push(eventModel);
    //   this.EventList.push(eventModel);
    // }else{
    //   this.ExpiredEventList.push(eventModel);
    // }

  }

  editEvent(event) {
    let eventModel: EventModel;
    eventModel = event;
    this.matDialog.open(EventEditComponent,{
      data:{
        eventModel
      }
    });
  }

  removeEvent(eventId: number) {
    let indexInMemory;
    let indexInView;
    indexInMemory = (this.EventListMemory.findIndex(x=>x.eventId == eventId));
    indexInView = (this.EventListMemory.findIndex(x=>x.eventId == eventId));
    this.ExpiredEventList.push(this.EventListMemory[indexInMemory]);
    this.EventListMemory.splice(indexInMemory,1);
    this.EventList.splice(indexInView,1);

    if (this.EventListMemory.length == 0 || this.EventList.length == 0){
      this.idNumber = 0;
    }

  }

  clockMethod(){
    setInterval(() => {

      // console.log(date);
      this.time = new Date();
      let timeToFilter = this.time.toTimeString();
      //let timeToFilter = "06:00 PM";
      let min = parseInt(timeToFilter.split( ':',2).splice(1).toString());
      let am_pm = timeToFilter.split( ' ',2).splice(1).toString();
      let hour = parseInt( timeToFilter.split( ':',1).toString());

      if (am_pm == 'PM'){

        if (hour != 12){
            hour = hour * 1 + 12;
        }

      }else if (am_pm == "AM" && hour == 12){
        hour = hour -12;
      }else{
        hour = hour;
      }
      let newHour;
      let newMin;
      if (min < 10){
        newMin = "0"+min;
      }else {
        newMin = min;
      }
      if (hour < 10){
        newHour = "0"+hour;
      }else {
        newHour = hour;
      }

      let finalTime = (newHour + ":" + newMin).toString();
      console.log("New Time "+ finalTime);

      this.EventListMemory.forEach((event)=>{
        if (event.eventStartTime == finalTime && (this.eventUpdated == true || event.eventId != this.tempEventId)){
          this.tempEventId = event.eventId;
          this.eventUpdated = false;
          this.dataFromComponentHandlerService.updateNextEvent(event);
        }

        if (event.eventEndTime == finalTime){
          //this.dataFromComponentHandlerService.updateNextEvent(null);
          let indexInMemory;
          let indexInView;
          indexInMemory = (this.EventListMemory.findIndex(x=>x.eventEndTime == finalTime));
          indexInView = (this.EventListMemory.findIndex(x=>x.eventEndTime == finalTime));
          this.EventListMemory[indexInMemory].eventCompleted = "Completed";
          this.ExpiredEventList.push(this.EventListMemory[indexInMemory]);
          this.dataFromComponentHandlerService.sendEventIdToRemove(event.eventId);
          this.EventListMemory.splice(indexInMemory,1);
          this.EventList.splice(indexInView,1);
        }

      })
    }, 1000);
  }

  itemPrinter() {
    setInterval(() => {
      this.time   = new Date();
    }, 1000);

  }
}
