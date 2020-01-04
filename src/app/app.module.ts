import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
