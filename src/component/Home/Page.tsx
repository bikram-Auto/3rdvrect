
import 'react-calendar/dist/Calendar.css'; // Import the necessary CSS for styling
import CalenderItem from '../Calendar';
import Calender2 from '../Calender2';
import FullCalendar2 from '../FullCalender2';



export default function HomePage() {
    

    return (
        <div className="items-start ml-[100px] mt-[90px]">
            <div className="shadow-2xl ">
                <FullCalendar2/>
            </div>
            
        </div>
    );
}
