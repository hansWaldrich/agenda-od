import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreComponent } from './core.component';
import { HomeModule } from '../modules/home/home.module';
import { CalendarModule } from '../modules/calendar/calendar.module';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class AppModule { }
