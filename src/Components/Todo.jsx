import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Todo = () => {
  return (
    <>
      {/* Title */}
      <h1 className="h-20 w-80 mx-auto  text-center py-8 ">
        <p className="font-bold text-4xl  text-indigo-500"> Taskify</p>
        <p className="text-amber-50 mt-2 text-2xl">
          {" "}
          Your Personal Task Manager
        </p>
      </h1>

      {/* Add Item  */}

      <div className="flex justify-center items-center my-16">
        <div className="w-80 h-10 rounded-xl border-2 border-solid border-indigo-400 hover:bg-[#000000] selection:bg-blue-500 selection:text-white mr-2">
          <input
            className="w-full h-full text-center rounded-xl bg-gray-900 text-white outline-none px-2"
            placeholder="Add Tasks"
          />
        </div>
        <button
          className="h-10 w-10 bg-indigo-500 flex justify-center items-center rounded-lg"
          onClick={() => {
            console.log("item added");
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {/* Todo's List */}
      <div className="todo-list text-white ">
        <div className="items flex items-center justify-center  ">
          <div className="flex items-center space-x-8 ">
            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
            <div className="btns flex space-x-6">
              {/* Edit */}
              <button className="w-8 h-8 bg-indigo-500 rounded-md">
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              {/* Delete */}
              <button className="w-8 h-8  bg-red-600 rounded-md">
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
