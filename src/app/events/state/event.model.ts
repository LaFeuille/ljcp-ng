import { ID } from '@datorama/akita';

export interface Event {
  id: ID;
  title: string;
  startDate: string;
  description: string;
}

export function createEvent({id = null, title = '', startDate = null, description = ''}: Partial<Event>): Event {
  return {id, title, startDate, description};
}
