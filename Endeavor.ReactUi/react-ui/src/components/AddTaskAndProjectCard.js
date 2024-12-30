import React from "react";

const AddTaskAndProjectCard = () => {
    return (
        <div className="bg-white pb-2 rounded-lg shadow-lg w-full relative">
            <div className="grid grid-cols-4 grid-rows-1 ">
                <div className="col-span-2 row-span-1 flex items-center  bg-blue-300  rounded-br-lg">
                    <h2 className="text-2xl font-bold ml-1 text-blue-700">Quick</h2>
                </div>
                <div></div>
                <div className="col-span-2 row-span-1 flex items-center justify-center p-2">
                    <button className="bg-transparent text-blue-500 border-2 border-blue-500 rounded-full h-10 w-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        <span className="material-icons">add</span>
                        <span>Create New Project</span>
                    </button>
                </div>
                <div className="col-span-2 row-span-1 flex items-center justify-center p-2">
                    <button className="bg-blue-500 text-white border-2 border-blue-500 rounded-full h-10 w-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        <span className="material-icons">add</span>
                        <span>Task</span>
                    </button>
                </div>
                <div className="col-span-2 row-span-1 flex items-center justify-center p-2">
                    <button className="bg-blue-500 text-white border-2 border-blue-500 rounded-full h-10 w-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-transparent hover:text-blue-500" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        <span className="material-icons">add</span>
                        <span>Collaborator </span>
                    </button>
                </div>
                <div className="col-span-2 row-span-1 flex items-center justify-center p-2">
                    <button className="bg-red-500 text-white border-2 border-red-500 rounded-full h-10 w-full flex items-center justify-center space-x-2 transition duration-300 ease-in-out hover:bg-transparent hover:text-red-500" style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
                        <span className="material-icons">delete</span>
                        <span>Delete Project</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTaskAndProjectCard;