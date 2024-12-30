import React from 'react';

const CollaboratorCard = ({ collaborator }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-2 ">
      <h3 className="text-xl font-bold text-start">{collaborator.name}</h3>
      <p className="text-gray-700 text-start">{collaborator.role}</p>
    </div>
  );
};

const CollaboratorsCard = ({ collaborators }) => {
  return (
    <div className="bg-white pb-2 rounded-lg shadow-lg w-full relative mb-2 ">
    <div className="grid grid-cols-4 grid-rows-1 gap-1">
      <div className="col-span-2 row-span-1 flex p-2 bg-blue-300 rounded-br-lg">
        <h2 className="text-2xl font-bold ml-1 text-blue-700 text-start">Collaborators</h2>
      </div>
      <div className="col-span-4 row-span-4 p-1 h-40 overflow-y-scroll ">
        {collaborators.map((collaborator, index) => (
          <CollaboratorCard  key={index} collaborator={collaborator} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default CollaboratorsCard;