import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { events } from "../static/utils/Events";
import 'react-big-calendar/lib/css/react-big-calendar.css';

const EventCalendar = () => {
    const localizer = momentLocalizer(moment);

    const views = {
        month: true,
        week: true,
        agenda: true,
    };
    return (
        <div className="m-4">
            <div className="section-block">
                <h2 className="section-title"> Event Calendar </h2>
            </div>
            <div style={{ height: 700 }}>
                <Calendar
                    defaultDate={new Date(2022, 8, 13)}
                    events={events}
                    localizer={localizer}
                    views={views}
                    step={60}
                    popup
                />
            </div>
        </div>
    );
}

export default EventCalendar;