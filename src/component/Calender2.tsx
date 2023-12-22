import React, { useState } from 'react'
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
// import { Calendar, momentLocalizer } from "react-big-calendar";

type Props = {}

export default function Calender2({}: Props) {

    const [date, setDate] = useState(new Date());

    const onChange = (date:any) => {
        setDate(date);
    };
    
  return (
    <div className='mr-20 pb-20'>
        {/* <Calendar onChange={onChange} value={date} /> */}
        <FullCalender/>
    </div>
  )
}

function Events(){
    return(
        <div className='p-64'>
            <p>Hello</p>
        </div>
    )
}

function FullCalender(){
    const handleDateClick = (arg: DateClickArg) => {
        alert(arg.dateStr);
      };

      function renderEventContent(eventInfo:any) {
        return (
          <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
          </>
        );
      }

    return(
        <div className=''>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                dateClick={(e) => handleDateClick(e)}
                events={[
                    { title: "event 1", date: "2021-05-07" },
                    { title: "event 2", date: "2021-05-17" }
                ]}
                eventContent={renderEventContent}
            />
        </div>
    )
}


