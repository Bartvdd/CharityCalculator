export class Event {
  id: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventType: EventType;
  isSupplemented: boolean;
  eventSupplement: number;
}

export enum EventType {
  Running = 1,
  Swimming,
  Jumping,
  Other
}
