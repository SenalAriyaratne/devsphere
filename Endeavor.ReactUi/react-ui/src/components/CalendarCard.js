import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday } from 'date-fns';

const CalendarCard = () => {
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full relative">
      <div className="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 text-white p-2 rounded-full shadow-md">
        <span className="material-icons text-2xl">calendar_today</span>
      </div>
      <h2 className="text-2xl font-bold mb-4">{format(today, 'MMMM yyyy')}</h2>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <div
            key={day}
            className={`p-2 rounded-full text-center ${
              isToday(day) ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarCard;