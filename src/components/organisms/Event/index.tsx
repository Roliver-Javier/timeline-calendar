import React, { useState, useEffect, useContext } from "react";
import { isDateInRange } from "../../../lib/utils";
import { Context } from "../../../contexts/CalendarProvider";
import { TEventProps } from "../../../lib/definitions";

const Event = ({ event, previous, list, canEdit }: TEventProps) => {
  const [eventPosition, setEventPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const [isEditEnable, setEditEnable] = useState<boolean>();
  const [isDragging, setIsDragging] = useState(false);

  const { updateEventName, updateEventDate } = useContext<any>(Context);

  const calculatePosition = () => {
    const startDateElement = document.getElementById(event.start);
    const endDateElement = document.getElementById(event.end);

    if (startDateElement && endDateElement) {
      const startCoordinates = startDateElement.getBoundingClientRect();
      const endCoordinates = endDateElement.getBoundingClientRect();

      const left = startCoordinates.left - 30;
      const width = endCoordinates.right - startCoordinates.left - 13;

      let top = 0;

      if (previous) {
        list.forEach((ev) => {
          const startDateInRange = isDateInRange(event.start, ev.start, ev.end);
          const endDateInRange = isDateInRange(event.end, ev.start, ev.end);
          if (startDateInRange || endDateInRange) {
            const otherEvent: any = document.getElementById(`event_${ev.id}`);
            const otherEventRect = otherEvent.getBoundingClientRect();
            top += otherEventRect.height + 8;
          }
        });
      } else {
        top = startCoordinates.top + startCoordinates.height / 2;
      }

      setEventPosition({ left, top, width });
    }
  };


  const handleMouseDown = () => {
    setIsDragging(true);
  };


  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    updateEventDate(event, e.target.className)
  };


  const handleEnableEdit = () => {
    if (canEdit) {
      setEditEnable(true);
    }
  };

  const handleKeyDown = (event: any) => {
    if(event.key.toUpperCase() ==='ENTER'){
      setEditEnable(true);
    }
  }

  const handleBlur = (e: any) => {
    updateEventName(event, e.target.value);
    setEditEnable(false);
  };

  useEffect(() => {
    calculatePosition();
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [event, previous]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
   
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isDragging]);

 
  return (
    <div
      tabIndex={0}
      aria-label={`${event.name} event from ${event.start} to ${event.end}`}
      id={`event_${event.id}`}
      className="event"
      style={{
        left: `${eventPosition.left}px`,
        top: `${eventPosition.top}px`,
        width: `${eventPosition.width}px`,
      }}
      data-start={event.start}
      data-end={event.end}
      onMouseDown={handleMouseDown}
      onKeyDown={handleKeyDown}
    >
      {!isEditEnable && (
        <span onDoubleClick={handleEnableEdit}>
          {event.name}
        </span>
      )}
      {isEditEnable && (
        <input type="text" tabIndex={0} aria-label={`${event.name} textbox`} defaultValue={event.name} onBlur={handleBlur} />
      )}
    </div>
  );
};

export default Event;
