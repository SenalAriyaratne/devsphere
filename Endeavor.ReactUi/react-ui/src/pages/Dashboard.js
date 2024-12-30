import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import CalendarCard from '../components/CalendarCard';
import TimeCard from '../components/TimeCard';
import TasksOverviewCard from '../components/TasksOverviewCard';

const Dashboard = () => {
  const firstName = 'John'; // Replace this with the actual user's first name
  const tasks = {
    toDo: 10,
    inProgress: 5,
    toStart: 3,
    overdue: 2,
  };
  return (
    <div className="grid md:grid-cols-3 grid-rows-3 ">
      <div className="row-span-1 col-span-1 mt-2 ml-2 space-y-2">
        <WelcomeCard firstName={firstName} />
        <CalendarCard />
        <TimeCard />
      </div>
      <div className="row-span-1 col-span-1 mt-2 ml-2 space-y-2">
        <TasksOverviewCard tasks={tasks} />
      </div>

    </div>
  );
};

export default Dashboard;