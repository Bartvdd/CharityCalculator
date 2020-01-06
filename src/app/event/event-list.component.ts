import { Component, OnInit } from '@angular/core';
import { Event } from './event';
import { EventService } from './event.service';

@Component({
  selector: 'cc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  errorMessage: string;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    console.log("In OnInit");
    this.eventService.getEvents()
      .subscribe({
      next: events => {this.events = events;},
      error: err => this.errorMessage = err
    });
  }
}
