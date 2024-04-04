import React, { createContext, useEffect, useState } from "react";
import moment from 'moment'
import { TCalendarProviderProps, TInitialState, TContextType, TTimeline } from "../lib/definitions";


const initialState: TInitialState = {
  events: [],
};



export const Context = createContext<TContextType | null>(null);


const CalendarProvider = ({ events, children }: TCalendarProviderProps) => {
  const [state, setState] = useState<TContextType>(()=>{
    const storedState = localStorage.getItem('calendarState');
    return storedState ? JSON.parse(storedState) : {
        ...initialState,
        events
      }
  });

  useEffect(() => {
    localStorage.setItem('calendarState', JSON.stringify(state));
  }, [state]);


  const updateEventName = (ev: TTimeline, name: string) => {
    const index = state.events.findIndex((event: TTimeline) => event.id === ev.id);
    if (index !== -1) {
      const updatedEvents = [...state.events];
      updatedEvents[index] = { ...updatedEvents[index], name };
      setState({
        ...state,
        events: [...updatedEvents],
      });
    }
  };

  const updateEventDate = (ev:TTimeline, date: string) => {
    const index = state.events.findIndex((event: TTimeline) => event.id === ev.id);
    const hasStartGreaterThanEnd = moment(state.events[index].end).isBefore(moment(date));
    if (index !== -1) {
      const updatedEvents = [...state.events];
      updatedEvents[index] = { ...updatedEvents[index], start: date, end: hasStartGreaterThanEnd ? date : state.events[index].end};
      setState({
        ...state,
        events: [...updatedEvents],
      });
    }
  }



  return <Context.Provider value={{
    ...state,
    updateEventName,
    updateEventDate,
  }}>
    {children}
  </Context.Provider>;
};

export default CalendarProvider;
