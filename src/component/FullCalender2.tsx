import * as React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import events from "./events";


moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function FullCalendar2() {
  const [eventsData, setEventsData] = React.useState(events);

  

  return (
    <div>
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={(localizer)}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width:900 }}
      />
    </div>
  );
}
