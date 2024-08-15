import React, { useState, useEffect } from 'react';
import './ViewHolidays.css';

const holidays = [
    { id: 1, name: 'New Year\'s Day', date: 'January 1' },
    { id: 2, name: 'Martin Luther King Jr. Day', date: 'January 15' },
    { id: 3, name: 'Valentine\'s Day', date: 'February 14' },
    { id: 4, name: 'Presidents\' Day', date: 'February 19' },
    { id: 5, name: 'St. Patrick\'s Day', date: 'March 17' },
    { id: 6, name: 'Easter', date: 'April 17' }, // Note: Easter date changes every year
    { id: 7, name: 'Mother\'s Day', date: 'May 14' },
    { id: 8, name: 'Memorial Day', date: 'May 29' },
    { id: 9, name: 'Father\'s Day', date: 'June 18' },
    { id: 10, name: 'Independence Day', date: 'July 4' },
    { id: 11, name: 'Labor Day', date: 'September 4' },
    { id: 12, name: 'Columbus Day', date: 'October 9' },
    { id: 13, name: 'Halloween', date: 'October 31' },
    { id: 14, name: 'Veterans Day', date: 'November 11' },
    { id: 15, name: 'Thanksgiving', date: 'November 23' }, // Note: Thanksgiving is the fourth Thursday in November
    { id: 16, name: 'Christmas', date: 'December 25' },
    { id: 17, name: 'New Year\'s Eve', date: 'December 31' }
];

function ViewHolidays() {
    const [holidayList, setHolidayList] = useState([]);

    useEffect(() => {
        // Convert holidays to a Date object and sort by date
        const sortedHolidays = holidays.sort((a, b) => {
            const dateA = new Date(`2024 ${a.date}`);
            const dateB = new Date(`2024 ${b.date}`);
            return dateA - dateB;
        });

        setHolidayList(sortedHolidays);
    }, []);

    return (
        <div className="holidays-container">
            <h1>Upcoming Holidays</h1>
            <div className="holiday-list">
                {holidayList.map(holiday => (
                    <div key={holiday.id} className="holiday-card">
                        <h2>{holiday.name}</h2>
                        <p>{holiday.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewHolidays;

