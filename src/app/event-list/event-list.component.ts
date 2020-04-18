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

    // console.log("Saving from " + eventModel.eventName);
    // console.log("Saving from " + eventModel.eventStartTime);
    // console.log("Saving from " + eventModel.eventId);
    // console.log("Saving from " + eventModel.eventEndTime);
    // console.log("Saving from " + eventModel.eventDescription);
    // console.log("Saving from " + eventModel.eventDate);
    // console.log("Saving from " + eventModel.eventCompleted);
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
    let eventModel: EventModel;
    eventModel = event;
    this.matDialog.open(EventEditComponent,{
      width:"70%",
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

    this.EventListMemory.splice(indexInMemory,1);
    this.EventList.splice(indexInView,1);

    if (this.EventListMemory.length == 0 || this.EventList.length == 0){
      this.idNumber = 0;
    }

  }

  clockMethod(){
    setInterval(() => {
      this.time = new Date();
      let y = this.time.toTimeString();
      //let y = "12:19:14 AM";
console.log("yyyy "+y);
      let min = parseInt(y.split( ':',2).splice(1).toString());
      let am_pm = y.split( ' ',2).splice(1).toString();
      let hour = parseInt( y.split( ':',1).toString());
      console.log("Time "+hour+":"+min+":"+am_pm);

      if (am_pm == 'PM'){

        if (hour != 12){
            hour = hour * 1 + 12;
        }

      }else if (am_pm == "AM" && hour == 12){
        hour = hour -12;
      }else{
        hour = hour;
      }
      let newHour
      if (hour < 10){
        newHour = "0"+hour;
      }else {
        newHour = hour;
      }

      console.log("New Time "+ newHour+":" + min);

      this.EventListMemory.forEach((event)=>{
        console.log("hi " + event.eventStartTime);
        console.log("hi2 " + event.eventStartTime.toString());
      })


    }, 1000);
  }

  itemPrinter() {
    setInterval(() => {
      this.time   = new Date();
     // console.log("fff "+this.time);
     //  console.log("getDate "+this.time.getDate());
     //  console.log("getDay "+this.time.getDay());
     //  console.log("getFullYear "+this.time.getFullYear());
     //  console.log("getHours "+this.time.getHours());
     //  console.log("getMilliseconds "+this.time.getMilliseconds());
     //  console.log("getMinutes "+this.time.getMinutes());
     //  console.log("getMonth "+this.time.getMonth());
     //  console.log("getSeconds "+this.time.getSeconds());
     //  console.log("getSeconds "+this.time.getSeconds());
     //  console.log("getTime "+this.time.getTime() );
     //  console.log("getTimezoneOffset "+this.time.getTimezoneOffset() );
     //  console.log("getUTCDate "+this.time.getUTCDate() );
     //  console.log("getUTCDay "+this.time.getUTCDay() );
     //  console.log("getUTCFullYear "+this.time.getUTCFullYear() );
     //  console.log("getUTCHours "+this.time.getUTCHours() +this.time.getTimezoneOffset());
     //  console.log("getUTCMilliseconds "+this.time.getUTCMilliseconds() );
     //  console.log("getUTCMinutes "+this.time.getUTCMinutes());
     //  console.log("getUTCMonth "+this.time.getUTCMonth());
     //  console.log("getUTCSeconds "+this.time.getUTCSeconds() );
     //  console.log("getSeconds "+this.time );
     //  console.log("getSeconds "+this.time );
     //  console.log("###########################################");

//       let test = (this.time.getUTCHours() + ":" + this.time.getMinutes());
//       console.log("test " + test);
// this.EventListMemory.forEach((event)=>{
//   if (event.eventStartTime == test){
//     console.log("fuu " + event.eventStartTime);
//   }
//   console.log("fuu " + event.eventStartTime);
// });
      //console.log("Done " + this.EventListMemory[0].eventId);

    }, 1000);

  }
}
