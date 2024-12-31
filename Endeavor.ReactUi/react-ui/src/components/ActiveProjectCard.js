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
    <div className="bg-white pb-2 rounded-lg shadow-lg w-full relative">
      <div className="grid grid-cols-4 grid-rows-4 gap-2 ">
        <div className="col-span-2 row-span-4 flex items-center justify-center bg-blue-300  rounded-lg ml-2 mt-2">
          <h2 className="md:text-2xl sm:text-xl font-bold ml-1 text-blue-700 ">Active Projects</h2>
        </div>
        <div className=" col-span-2 ">
          <div className="absolute top-0 right-0 mr-1 mt-1 bg-blue-500 text-white p-1 rounded-full shadow-md">
            <span className="material-icons text-xl text-white">app_registration</span>
          </div>
        </div>

        <div className="col-span-4 row-span-4 p-1 h-64 overflow-y-scroll ">
          {projects.map((project, index) => (
            <MiniProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ActiveProjectsCard;