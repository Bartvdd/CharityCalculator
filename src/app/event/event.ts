export interface IEvent {
  eventId: number;
  eventName: string;
  eventDate: string;
  eventDescription: string;
  eventType: EventType;
  isSupplemented: boolean;
}

enum EventType {
  Running = 1,
  Swimming,
  Jumping,
  Other
}
