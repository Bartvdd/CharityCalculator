import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponentComponent } from './event-component/event-component.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponentComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
