import dayjs from 'dayjs';
import { weekdays } from './const';

export function getCurrentDayOfWeek(timestamp=null) {
    if(timestamp)
        return weekdays[dayjs(timestamp * 1000).day()];
    else
        return weekdays[dayjs().day()];
}

function formatHour(hour) {
    if(hour > 12) {
        return (hour - 12) + "PM";
    } else {
        return hour + "AM";
    }
}

export function getCurrentTime(timestamp=null) {
    if(timestamp)
        return formatHour(dayjs(timestamp * 1000).hour());
    else
        return formatHour(dayjs().hour());
}