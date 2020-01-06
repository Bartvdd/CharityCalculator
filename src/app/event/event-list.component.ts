import { Component, OnInit } from '@angular/core';
import { Event } from '../data/event';
import { EventService } from './event.service';
import { TaxRateService } from '../taxrate/taxrate.service';

@Component({
  selector: 'cc-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  pageTitle : string = "Events"
  events: Event[];
  taxrate: number;
  _donation = 0;
  get donation(): number {
    return this._donation;
  }
  set donation(value: number) {
    this._donation = value;
    //this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  errorMessage: string;

  constructor(private eventService: EventService, private taxrateService : TaxRateService) { }

  ngOnInit(): void {
    console.log("In OnInit");
    this.eventService.getEvents()
      .subscribe({
        next: events => { this.events = events; },
        error: err => this.errorMessage = err
      });
    this.taxrateService.getTaxRate()
      .subscribe({
      next: taxrate => { this.taxrate = taxrate; },
      error: err => this.errorMessage = err
  });
  }
}
