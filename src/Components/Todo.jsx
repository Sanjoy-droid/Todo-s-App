import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [task, setTask] = useState("");
  const [taskItem, setTaskItem] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskItem");
    if (storedTasks) {
      setTaskItem(JSON.parse(storedTasks));
    }
  }, []);

  const saveToLocalStorage = (tasks) => {
    localStorage.setItem("taskItem", JSON.stringify(tasks));
  };

  const handleDelete = (id) => {
    const updatedTasks = taskItem.filter((task) => task.id !== id);
    setTaskItem(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const handleEdit = (e, id) => {
    let t = taskItem.filter((i) => i.id === id);
    setTask(t[0].task);

    const updatedTasks = taskItem.filter((task) => task.id !== id);
    setTaskItem(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  const handleAdd = () => {
    if (!task.trim()) return;

    const newTask = { id: uuidv4(), task, isCompleted: false };
    setTaskItem([...taskItem, newTask]);
    setTask("");
    saveToLocalStorage([...taskItem, newTask]);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleCheckbox = (id) => {
    const updatedTasks = taskItem.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskItem(updatedTasks);
    saveToLocalStorage(updatedTasks);
  };

  return (
    <>
      {/* Title */}
      <h1 className="h-20 w-80 mx-auto text-center py-8">
        <p className="font-bold text-4xl text-indigo-500">Taskify</p>
        <p className="text-amber-50 mt-2 text-2xl">
          Your Personal Task Manager
        </p>
      </h1>

      {/* Add Item */}
      <div className="flex justify-center items-center my-16">
        <div className="w-80 h-10 rounded-xl border-2 border-solid border-indigo-400 hover:bg-[#000000] selection:bg-blue-500 selection:text-white mr-2">
          <input
            onChange={handleChange}
            value={task}
            className="w-full h-full text-center rounded-xl bg-gray-900 text-white outline-none px-2"
            placeholder="Add Tasks"
          />
        </div>
        <button
          className="h-10 w-10 bg-indigo-500 flex justify-center items-center rounded-lg"
          onClick={handleAdd}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      {/* Todo's List */}
      <div className="todo-list text-white">
        {taskItem.length === 0 ? (
          <div className="flex justify-center items-center">
            Your Task List is Empty !!!
          </div>
        ) : (
          taskItem.map((item) => (
            <div
              key={item.id}
              className="items flex items-center justify-center"
            >
              <div className="flex items-center  ">
                <div className="h-4 w-4  mx-4 ">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleCheckbox(item.id)}
                  />
                </div>
                <div
                  className={`bg-gray-700 border-indigo-300 border-2 w-64 my-1 flex  justify-center rounded-lg   text-lg ${
                    item.isCompleted ? "line-through" : ""
                  } `}
                >
                  {item.task.length > 15
                    ? item.task.slice(0, 15) + "..."
                    : item.task}
                </div>
              </div>

              <div className="btns flex space-x-6 ml-4">
                {/* Edit */}
                <button
                  className="w-8 h-8 bg-indigo-500 rounded-md"
                  onClick={(e) => handleEdit(e, item.id)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                {/* Delete */}
                <button
                  className="w-8 h-8 bg-red-600 rounded-md"
                  onClick={() => handleDelete(item.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Todo;
