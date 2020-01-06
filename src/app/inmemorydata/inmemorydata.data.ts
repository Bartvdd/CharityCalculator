import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event, EventType } from '../data/event'
import { Injectable } from '@angular/core';
import { User, UserType } from '../data/user';

@Injectable({
  providedIn: 'root',
})

export class InMemoryData implements InMemoryDbService {
  createDb() {
    const events: Event[] = [
      {
        id: 1,
        eventName: "Runner run!",
        eventDate: "2020-05-01",
        eventDescription: "Run as fast as you can!",
        eventType: EventType.Running,
        isSupplemented: true,
        eventSupplement: 5
      },
      {
        id: 2,
        eventName: "Swimmer swim!",
        eventDate: "2020-06-01",
        eventDescription: "Swim as fast as you can!",
        eventType: EventType.Swimming,
        isSupplemented: false,
        eventSupplement: 0
      },
      {
        id: 3,
        eventName: "Jumper jump!",
        eventDate: "2020-04-01",
        eventDescription: "Jump as high as you can!",
        eventType: EventType.Jumping,
        isSupplemented: false,
        eventSupplement: 0
      }
    ];
    const taxrate = 20;
    const users: User[] = [
      {
        id: 1,
        userName: "donor",
        userPassword: "donor",
        userType: UserType.Donor
      },
      {
        id: 2,
        userName: "sponsor",
        userPassword: "sponsor",
        userType: UserType.Sponsor
      },
      {
        id: 3,
        userName: "siteadmin",
        userPassword: "siteadmin",
        userType: UserType.SiteAdmin
      }
    ];

    return { events, taxrate, users };
  }
}

