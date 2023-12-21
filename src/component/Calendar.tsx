import React, { useEffect, useState, ChangeEvent } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';

interface UserResult {
    created_at: Date | string;
   
}

interface Event {
    id: number;
    date: Date;
    description: string;
}

const CalendarItem: React.FC = () => {
    const [calDate, setCalDate] = useState<Date>(new Date());
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [events, setEvents] = useState<Event[]>([]);
    const [eventDescription, setEventDescription] = useState<string>('');

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const onChange = (value: Value, event: React.SyntheticEvent) => {
        if (value instanceof Date) {
            setCalDate(value);
        } else if (Array.isArray(value) && value.length > 0 && value[0] instanceof Date) {
            setCalDate(value[0]);
        }
    };
    
    
    

    const onEventDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEventDescription(event.target.value);
    };

    const addEvent = () => {
        if (calDate && eventDescription) {
            const newEvent: Event = { id: Date.now(), date: calDate, description: eventDescription };
            setEvents([...events, newEvent]);
            setEventDescription('');
        }
    };

    const deleteEvent = (id: number) => {
        const updatedEvents = events.filter(event => event.id !== id);
        setEvents(updatedEvents);
    };

    return (
        <div className="items-start ml-[190px] mt-[100px]">
            <div className='flex pl-10 '>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Event Description:
                    </label>
                    <input type="text"
                    id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={eventDescription} onChange={onEventDescriptionChange} />
                    <button type='button' 
                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800" 
                    onClick={addEvent}>Add Event
                    </button>
                </div>
            <div className='flex-auto ml-[120px] '>
                {/* Event creation form */}
                

                {/* Calendar */}
                <div className="result-calendar items-center font-thin shadow-2xl">
                    <Calendar onChange={onChange} value={calDate} />
                </div>

                {/* Display Events */}
                <div className='text-center'>
                    <h2 className='font-bold'>Events:</h2>
                    {events.map((event) => (
                        <div key={event.id}>
                            <p>Date: {event.date.toLocaleDateString()}</p>
                            <p>Description: {event.description}</p>
                            <button type='button' 
                            className="text-gray-900 hover:text-white border border-red-900 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                            onClick={() => deleteEvent(event.id)}>X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CalendarItem;
