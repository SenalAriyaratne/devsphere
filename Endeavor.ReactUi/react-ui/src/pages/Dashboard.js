import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import CalendarCard from '../components/CalendarCard';
import TimeCard from '../components/TimeCard';
import TasksOverviewCard from '../components/TasksOverviewCard';
import ActiveProjectsCard from '../components/ActiveProjectCard';
import CollaboratorsCard from '../components/CollaboratorsCard';
import HighPriorityTasksCard from '../components/HighPriorityTasksCard';
import AddTaskAndProjectCard from '../components/AddTaskAndProjectCard';
const Dashboard = () => {
  const firstName = 'John'; // Replace this with the actual user's first name
  const tasks = {
    toDo: 20,
    inProgress: 5,
    toStart: 3,
    overdue: 2,
  };
  const projects = [
    { name: 'Project A', description: 'Description of Project A', createdDate: '2023-01-01', progress: 70, tasks: [
      { name: 'Task 1', description: 'Description of Task 1', priority: 'High' },
      { name: 'Task 2', description: 'Description of Task 2', priority: 'Low' },
    ]},
    { name: 'Project B', description: 'Description of Project B', createdDate: '2023-02-01', progress: 50, tasks: [
      { name: 'Task 3', description: 'Description of Task 3', priority: 'High' },
      { name: 'Task 4', description: 'Description of Task 4', priority: 'Medium' },
    ]},
    { name: 'Project C', description: 'Description of Project C', createdDate: '2023-03-01', progress: 30, tasks: [
      { name: 'Task 5', description: 'Description of Task 5', priority: 'High' },
      { name: 'Task 6', description: 'Description of Task 6', priority: 'Low' },
    ]},
  ];
  const collaborators = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'Project Manager' },
    // Add more collaborators as needed
  ];
  const highPriorityTasks = projects.flatMap(project => project.tasks.filter(task => task.priority === 'High'));

  return (
    
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4 h-screen md:overflow-hidden">
      <div className="space-y-4">
        <WelcomeCard firstName={firstName} />
        <CalendarCard />
        <TimeCard />
      </div>
      <div className="space-y-4">
        <AddTaskAndProjectCard />
        <TasksOverviewCard tasks={tasks} />
        <ActiveProjectsCard projects={projects} />
        
      </div>
      <div className="space-y-4">
        {/* Additional content can go here */}
        <CollaboratorsCard collaborators={collaborators} />
        <HighPriorityTasksCard tasks={highPriorityTasks} />
      </div>
    </div>
  );
};

export default Dashboard;