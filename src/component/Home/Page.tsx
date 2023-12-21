
import 'react-calendar/dist/Calendar.css'; // Import the necessary CSS for styling
import CalenderItem from '../Calendar';
import Calender2 from '../Calender2';



export default function HomePage() {
    

    return (
        <div className="items-start ml-[90px] mt-[90px]">
            <div className='flex-auto ml-[120px] '>
                {/* <p>Current Date: {currentDate.toLocaleDateString()}</p> */}
                <div className="result-calendar items-center font-thin shadow-2xl w-120">
                    <Calender2/>
                </div>
            </div>
        </div>
    );
}
