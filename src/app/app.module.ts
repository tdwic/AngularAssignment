import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventNextComponent } from './event-next/event-next.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventCalenderComponent } from './event-calender/event-calender.component';
import { EventToDayComponent } from './event-to-day/event-to-day.component';
import { EventActionButtonComponent } from './event-action-button/event-action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    EventNextComponent,
    EventListComponent,
    EventCalenderComponent,
    EventToDayComponent,
    EventActionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
