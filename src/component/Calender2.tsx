import React, { useState } from 'react'
import Calendar from 'react-calendar';

type Props = {}

export default function Calender2({}: Props) {

    const [date, setDate] = useState(new Date());

    const onChange = (date:any) => {
        setDate(date);
    };
    
  return (
    <div>
        <div>
            <Calendar onChange={onChange} value={date} />
        </div>
        <div>
            <Events/>
        </div>
    </div>
  )
}

function Events(){
    return(
        <div>
            hello
        </div>
    )
}


