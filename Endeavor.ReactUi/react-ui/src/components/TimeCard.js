import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const TimeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-96 relative flex items-center justify-center">
    //   <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    //     {format(currentTime, 'hh:mm:ss a')}
    //   </div>
    // </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg w-full flex items-center justify-center">
      <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
        {format(currentTime, 'hh:mm:ss a')}
      </div>
    </div>
  );
};

export default TimeCard;