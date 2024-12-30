import React from "react";

const TasksOverviewCard = ({ tasks }) => {
    return (
    //     <div className="bg-white p-3 rounded-lg shadow-lg w-full relative">
    //   <div className="grid grid-cols-4 grid-rows-3 gap-2">
    //     <div className="col-span-4 row-span-1 flex items-start ">
    //       <h2 className="text-2xl font-bold">Tasks Overview</h2>
    //     </div>
    //     <div className="col-span-1 row-span-1 flex items-center justify-center">
    //       <h3 className="text-lg font-bold">To Do</h3>
    //     </div>
    //     <div className="col-span-1 row-span-1 flex items-center justify-center">
    //       <h3 className="text-lg font-bold">In Progress</h3>
    //     </div>
    //     <div className="col-span-1 row-span-1 flex items-center justify-center">
    //       <h3 className="text-lg font-bold">To Start</h3>
    //     </div>
    //     <div className="col-span-1 row-span-1 flex items-center justify-center">
    //       <h3 className="text-lg font-bold">Overdue</h3>
    //     </div>
    //     <div className="col-span-1 row-span-2 flex items-start justify-center">
    //     <div className="bg-blue-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    //         <p className="text-3xl font-bold">{tasks.toDo}</p>
    //       </div>
    //     </div>
    //     <div className="col-span-1 row-span-2 flex items-start justify-center">
    //     <div className="bg-yellow-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    //         <p className="text-3xl font-bold">{tasks.inProgress}</p>
    //       </div>
    //     </div>
    //     <div className="col-span-1 row-span-2 flex items-start justify-center">
    //     <div className="bg-teal-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    //         <p className="text-3xl font-bold">{tasks.toStart}</p>
    //       </div>
    //     </div>
    //     <div className="col-span-1 row-span-2 flex items-start justify-center">
    //     <div className="bg-red-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
    //         <p className="text-3xl font-bold">{tasks.overdue}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white p-3 rounded-lg shadow-lg w-full relative">
      <div className="grid grid-cols-4 grid-rows-3 gap-2">
        <div className="col-span-4 row-span-1 flex items-start">
          <h2 className="text-2xl font-bold">Tasks Overview</h2>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <h3 className="text-lg font-bold">To Do</h3>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-left">
          <h3 className="text-lg font-bold">In Progress</h3>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <h3 className="text-lg font-bold">To Start</h3>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center">
          <h3 className="text-lg font-bold">Overdue</h3>
        </div>
        <div className="col-span-1 row-span-2 flex items-start justify-center relative">
          <div className="bg-blue-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <p className="text-3xl font-bold">{tasks.toDo}</p>
          </div>
          <div className="absolute right-0 top-1/4 bottom-1/4 transform -translate-y-1/2 h-10 w-px bg-gray-300"></div>
        </div>
        <div className="col-span-1 row-span-2 flex items-start justify-center relative">
          <div className="bg-yellow-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <p className="text-3xl font-bold">{tasks.inProgress}</p>
          </div>
          <div className="absolute right-0 top-1/4 bottom-1/4 transform -translate-y-1/2 h-10 w-px bg-gray-300"></div>
        </div>
        <div className="col-span-1 row-span-2 flex items-start justify-center relative">
          <div className="bg-teal-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <p className="text-3xl font-bold">{tasks.toStart}</p>
          </div>
          <div className="absolute right-0 top-1/4 bottom-1/4  transform -translate-y-1/2 h-10 w-px bg-gray-300"></div>
        </div>
        <div className="col-span-1 row-span-2 flex items-start justify-center relative">
          <div className="bg-red-500 text-white rounded-full h-10 w-16 flex items-center justify-center" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <p className="text-3xl font-bold">{tasks.overdue}</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default TasksOverviewCard;