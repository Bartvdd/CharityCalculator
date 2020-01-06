import { Component, OnInit } from '@angular/core';
import { Event } from '../data/event';
import { EventService } from './event.service';
import { TaxRateService } from '../taxrate/taxrate.service';
import { LoginService } from '../home/login/login.service';
import { User } from '../data/user';

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
  user: User;

  get donation(): number {
    return this._donation;
  }
  set donation(value: number) {
    this._donation = value;
    //this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  errorMessage: string;

  constructor(private eventService: EventService, private taxrateService : TaxRateService, private loginService : LoginService) { }

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
    this.user = this.loginService.user;
    console.log(this.user);
  }
}
