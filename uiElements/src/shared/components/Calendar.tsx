import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {

    const eventContent = (activeStartDate: any, date: any, view: any) => {
        const temp = date.getMonth();
        if (temp === 7 && view === 'month' && date.getDate() === 10)
            return (
                <div className='calendar-event'>Today is August 10th</div>
            );
        else if (view === 'month' && date.getDay() === 0) {
            return (
                <>
                    <div className='calendar-event'>Its Sunday</div>
                    <div className='calendar-event-holiday'>{`(Holiday)`}</div>
                </>
            );
        }
        return <></>;
    }

    return (
        <>
            <div className="mx-4">
                <div className="section-block">
                    <h2 className="section-title"> Calendar </h2>
                </div>
                <div className="section-block">
                    <h2 className="section-title"> Simple Calendar </h2>
                </div>
                <div className="section-block">
                    <Calendar />
                </div>
                <div className="section-block">
                    <h2 className="section-title"> Large size with range selection </h2>
                </div>
                <div className="section-block">
                    <Calendar className="calendarStyle" selectRange />
                </div>
                <div className="section-block">
                    <h2 className="section-title">Default view - Months list</h2>
                </div>
                <div className="section-block">
                    <Calendar defaultView="year" />
                </div>
                <div className="section-block">
                    <h2 className="section-title">Double month view with date selection range fixed</h2>
                </div>
                <div className="section-block">
                    <Calendar minDate={new Date(2022, 7, 10)} maxDate={new Date(2022, 7, 22)} showDoubleView />
                </div>
                <div className="section-block">
                    <h2 className="section-title">Custom styling</h2>
                </div>
                <div className="section-block">
                    <Calendar showDoubleView tileClassName="tileClass" />
                </div>
                <div className="section-block">
                    <h2 className="section-title">Events</h2>
                </div>
                <div className="section-block">
                    <Calendar tileContent={({ activeStartDate, date, view }) => eventContent(activeStartDate, date, view)} className="calendarStyle" tileClassName="tileClassSpacing" />
                </div>
            </div>
        </>
    )
}

export default CalendarView;