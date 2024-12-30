import React from 'react';

const MiniProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-2">
        <h3 className="text-xl font-bold text-start">{project.name}</h3>
        <p className="text-gray-700 text-start">{project.description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="w-1/2 bg-gray-300 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
          </div>
          <p className="text-gray-500 text-end">Created: {project.createdDate}</p>
        </div>
        <p className="text-gray-500 text-start mt-1">{project.progress}%</p>
      </div>
    );
  };
  
  const ActiveProjectsCard = ({ projects }) => {
    return (
        <div className="bg-white pb-1 rounded-lg shadow-lg w-full relative">
        <div className="grid grid-cols-4 grid-rows-1 gap-1">
          <div className="col-span-2 row-span-1 flex p-2 bg-blue-300 rounded-br-lg">
            <h2 className="text-2xl font-bold ml-1 text-blue-700 text-start">Active Projects</h2>
          </div>
          <div className="col-span-4 row-span-4 p-1 overflow-y-scroll h-64">
            {projects.map((project, index) => (
              <MiniProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default ActiveProjectsCard;