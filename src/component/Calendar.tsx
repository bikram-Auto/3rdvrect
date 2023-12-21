import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css'; // Import the necessary CSS for styling

interface UserResult {
    created_at: Date | string; // Adjust the type accordingly
    // Add other properties based on your actual user result structure
}

interface Event {
    date: Date;
    description: string;
}

export default function CalenderItem() {
    const [calDate, setCalDate] = useState<Date>(new Date());
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [userResults, setUserResults] = useState<UserResult[]>([]);
    const [events, setEvents] = useState<Event[]>([]);
    const [eventDescription, setEventDescription] = useState<string>('');

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    function onChange(value: Value, event: React.SyntheticEvent) {
        if (value instanceof Date) {
            setCalDate(value);
        }
    }

    function tileClassName({ date, view }: { date: Date; view: string }) {
        // Add a custom class to the cell corresponding to the current date
        if (view === 'month' && date.toISOString().split('T')[0] === currentDate.toISOString().split('T')[0]) {
            return 'highlight-current-date';
        }
        return '';
    }

    function onEventDescriptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEventDescription(event.target.value);
    }

    function addEvent() {
        if (calDate && eventDescription) {
            const newEvent: Event = { date: calDate, description: eventDescription };
            setEvents([...events, newEvent]);
            setEventDescription(''); // Clear the input field
        }
    }

    return (
        <div className="items-start ml-[100px] mt-[100px]">
            <div className='flex-auto ml-[120px] '>
                {/* Event creation form */}
                <div>
                    <label>
                        Event Description:
                        <input type="text" value={eventDescription} onChange={onEventDescriptionChange} />
                    </label>
                    <button onClick={addEvent}>Add Event</button>
                </div>

                {/* Calendar */}
                <div className="result-calendar items-center font-thin shadow-2xl">
                    <Calendar onChange={onChange} value={calDate} tileClassName={tileClassName} />
                </div>

                {/* Display Events */}
                <div>
                    <h2>Events:</h2>
                    {events.map((event, index) => (
                        <div key={index}>
                            <p>Date: {event.date.toLocaleDateString()}</p>
                            <p>Description: {event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
