import React from 'react';

const HighPriorityTaskCard = ({ task }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-2">
      <h3 className="text-xl font-bold text-start">{task.name}</h3>
      <p className="text-gray-700 text-start">{task.description}</p>
      <p className="text-red-500 text-start">Priority: {task.priority}</p>
    </div>
  );
};

const HighPriorityTasksCard = ({ tasks }) => {
  return (
    <div className="bg-white pb-2 rounded-lg shadow-lg w-full relative h-0.5-screen"> 
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        <div className="col-span-2 row-span-4 flex items-center justify-center bg-red-300 rounded-lg ml-2 mt-2">
          <h2 className="md:text-2xl sm:text-xl font-bold  text-red-700">Priority Tasks</h2>
        </div>
        <div className="col-span-4 row-span-4 p-4 h-80 overflow-y-scroll">
          {tasks.map((task, index) => (
            <HighPriorityTaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighPriorityTasksCard;