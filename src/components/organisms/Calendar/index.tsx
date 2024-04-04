import React, { useEffect, useState, useContext } from "react";
import moment, { Moment } from "moment";
import "./Calendar.css";
import { getDatesRange, getMinAndMaxDateEvents } from "../../../lib/utils";
import { Context } from "../../../contexts/CalendarProvider";
import { TCalendarProps, TTimeline } from '../../../lib/definitions'
import Event from "../Event";


const Calendar = ({ canEdit }: TCalendarProps) => {
  const { events } = useContext<any>(Context);
  const [dates, setDates] = useState<any[]>();

  useEffect(() => {
    if (events.length > 0) {
      const [startDate, endDate] = getMinAndMaxDateEvents(
        events[0].start,
        events[0].end,
        events
      );

      const dateRanges = getDatesRange(startDate, endDate);
      setDates(dateRanges);
    }
  }, [events]);

  const getFormatDate = (date: Moment) => date.format("YYYY/MM/DD");

  const handleKeyDown = (event: any) => {
    if(event.key.toUpperCase() ==='ENTER'){
      const elementToFocus = document.querySelectorAll(`.event[data-start="${event.target.parentElement.id}"]`);
      if(elementToFocus && elementToFocus[0] instanceof HTMLElement){
        elementToFocus[0].focus();
      }
    }
  }

 if(!dates ) return null;
  return dates &&(
    <div style={{ overflowX: "scroll" }}>
      <div className="calendar-container">
        <div className="calendar-header-container">
          {dates.map((date) => {
            const dayName =  date.format("ddd");
            const dayNumber = date.format("DD");
            const monthName = date.format("MMM");
            const year = date.format("YYYY")
            const isToday = date.isSame(moment(), "day");
            return (
              <div
                key={getFormatDate(date)}
                className="calendar-header"
                id={date.format("YYYY-MM-DD")}
              >
                <div className="calendar-header-day"
                    onKeyDown={handleKeyDown} 
                     tabIndex={0} 
                     aria-label={`${year} ${monthName} ${dayNumber} Header`}>
                  <small>{monthName}</small>
                  <span>{dayName}</span>
                  <span className={`${isToday ? "today" : ""}`}>
                    {dayNumber}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="calendar-board" id="dropArea">
          {dates.map((date, index) => (
            <div key={`cell_${index}`} className={date.format("YYYY-MM-DD")}></div>
          ))}
        </div>
        <div className="events-container">

          {events.map((event: TTimeline, index: number, arr: TTimeline[]) => (
            <Event
              key={index}
              event={event}
              previous={arr[index - 1]}
              list={arr}
              canEdit={canEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
