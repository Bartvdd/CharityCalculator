import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from './event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from '../inmemorydata/inmemorydata.data';
import { RoundDecimalPipe } from '../shared/rounddecimal.pipe';



@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
    RoundDecimalPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryData)
  ],
  exports: [
    EventListComponent
  ]
})
export class EventModule { }
