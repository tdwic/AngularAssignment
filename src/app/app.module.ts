import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventNextComponent } from './event-next/event-next.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCalenderComponent } from './event-calender/event-calender.component';
import { EventToDayComponent } from './event-to-day/event-to-day.component';
import { EventActionButtonComponent } from './event-action-button/event-action-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatCalendar, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EventAddNewComponent } from './event-add-new/event-add-new.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import { EventListByDayComponent } from './event-list-by-day/event-list-by-day.component';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventEditComponent } from './event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventNextComponent,
    EventListComponent,
    EventCalenderComponent,
    EventToDayComponent,
    EventActionButtonComponent,
    EventAddNewComponent,
    EventListByDayComponent,
    EventEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        AmazingTimePickerModule,
        ReactiveFormsModule,
        MatDividerModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
