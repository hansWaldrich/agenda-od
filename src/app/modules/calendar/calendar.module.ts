import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { DayPilotModule } from '@daypilot/daypilot-lite-angular';
import { CalendarComponent } from './components/calendar.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule
  ],
  declarations: [
    CalendarComponent
  ],
  exports:      [ CalendarComponent ],
  providers:    [ DataService ]
})
export class CalendarModule { }
