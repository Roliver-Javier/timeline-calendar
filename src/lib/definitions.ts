export type TTimeline = {
  id: number;
  start: string;
  end: string;
  name: string;
};

export type TCalendarProps = {
  canEdit: boolean;
};

export type TEventProps = {
  event: TTimeline;
  previous: TTimeline;
  list: TTimeline[];
  canEdit: boolean;
};

export type TCalendarProviderProps = {
  children: any;
  events: TTimeline[];
};

export type TInitialState = {
  events: TTimeline[] | [];
};

export interface TContextType {
  events: TTimeline[];
  updateEventName: (ev: TTimeline, name: string) => void;
  updateEventDate: (ev: TTimeline, date: string) => void;
}
